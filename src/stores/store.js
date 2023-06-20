import { create } from "zustand";
import supabase from "../utils/supabaseClient";

const fetchPostQuery = `id,
      title, text, imageUrl, startDate, endDate,
      locations (location, country, lon, lat),
      authors (name, avatarUrl)`;

async function fetchPostData(column, equalTo) {
  const { data, error } = column
    ? await supabase
        .from("blogposts")
        .select(fetchPostQuery)
        .order("startDate", { ascending: false })
        .eq(column, equalTo)
    : await supabase
        .from("blogposts")
        .select(fetchPostQuery)
        .order("startDate", { ascending: false });
  if (error) {
    console.log(error);
    return null;
  }
  return data;
}

async function uploadImage(newImageFile, bucket, imgName) {
  const fileExt = newImageFile.name.split(".").pop();
  const fileName = `${Math.random()}-${imgName}.${fileExt}`;
  const { error } = await supabase.storage
    .from(bucket)
    .upload(fileName, newImageFile);
  error && console.log(error);
  const { data } = await supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
}

async function getLocationId(location, country, lat, lon) {
  const { data: locationData, error: getLocationErr } = await supabase
    .from("locations")
    .select("id")
    .eq("location", location);
  getLocationErr && console.log(getLocationErr);
  if (locationData[0]) {
    return locationData[0].id;
  }
  const { data, error: insertErr } = await supabase
    .from("locations")
    .insert({
      location: location,
      country: country,
      lon: lon,
      lat: lat,
    })
    .select("id");
  insertErr && console.log(insertErr);
  return data[0].id;
}

const useStore = create((set, get) => ({
  blogPosts: null,
  detailPost: null,
  isAuthenticated: false,
  userId: null,
  userName: null,
  userDescription: null,
  avatarUrl: null,
  userPosts: null,
  loading: false,
  showMobileMenu: false,

  getPosts: async () => {
    set({ loading: true });
    const postData = await fetchPostData();
    set({ blogPosts: postData });
    set({ loading: false });
  },
  getDetailPost: async (postId) => {
    set({ loading: true });
    set({ detailPost: null });
    const postData = await fetchPostData("id", postId);
    set({ detailPost: postData[0] });
    set({ loading: false });
  },
  getUserPosts: async (userId) => {
    set({ loading: true });
    set({ userPosts: null });
    const postData = await fetchPostData("author_id", userId);
    set({ userPosts: postData });
    set({ loading: false });
  },
  getUserData: async () => {
    set({ loading: true });
    await get().refreshAuth;
    const {
      data: {
        user: { id },
      },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("authors")
      .select()
      .eq("id", id);
    error && console.log(error);
    set({ userName: data[0].name });
    set({ avatarUrl: data[0].avatarUrl });
    set({ userDescription: data[0].description });
    get().getUserPosts(id);
    set({ loading: false });
  },
  updateUserData: async (formData) => {
    const imageUrl = formData.image[0]
      ? await uploadImage(formData.image[0], "avatars", formData.name)
      : await get().avatarUrl;
    const userId = await get().userId;
    const { data, error } = await supabase
      .from("authors")
      .update({
        name: formData.name,
        avatarUrl: imageUrl,
        description: formData.description,
      })
      .eq("id", userId)
      .select();
    error && console.log(error);
    await get().getUserData;
  },
  createNewPost: async (formData) => {
    const imageUrl = await uploadImage(
      formData.image[0],
      "locations",
      formData.location
    );
    const locationId = await getLocationId(
      formData.location,
      formData.country,
      formData.latitude,
      formData.longitude
    );
    const { error: postUploadErr } = await supabase.from("blogposts").insert({
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      author_id: await get().userId,
      imageUrl: imageUrl,
      location_id: locationId,
      text: formData.text,
    });
    await get().getPosts();
    postUploadErr && console.log(postUploadErr);
  },
  refreshAuth: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      set({ isAuthenticated: true });
      set({ userId: data.session.user.id });
    } else {
      get().logout();
    }
    error && console.log(error);
  },
  login: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    await get().refreshAuth();
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    set({ isAuthenticated: false });
    set({ userId: null });
    set({ userName: null });
    set({ userDescription: null });
    set({ avatarUrl: null });
    set({ userPosts: null });
    error && console.log(error);
  },
  toggleMobileMenu: () => {
    set((state) => ({ showMobileMenu: !state.showMobileMenu }));
  },
  closeMobileMenu: () => {
    set({ showMobileMenu: false });
  },
}));

export default useStore;
