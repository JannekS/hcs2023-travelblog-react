import { create } from "zustand";
import supabase from "../utils/supabaseClient";

const useStore = create((set, get) => ({
  blogPosts: null,
  detailPost: null,
  getPosts: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from("blogposts")
      .select(
        `id,
      title, text, imageUrl, startDate, endDate,
      locations (location, country, lon, lat),
      authors (name, avatarUrl)`
      )
      .order("startDate", { ascending: false });
    set({ blogPosts: data });
    if (error) {
      console.log(error);
    }
    set({ loading: false });
  },
  getDetailPost: async (postId) => {
    set({ detailPost: null });
    set({ loading: true });
    const { data, error } = await supabase
      .from("blogposts")
      .select(
        // TODO: refactor this
        `id,
      title, text, imageUrl, startDate, endDate,
      locations (location, country, lon, lat),
      authors (name, avatarUrl)`
      )
      .eq("id", postId);
    set({ detailPost: data[0] });
    if (error) {
      console.log(error);
    }
    set({ loading: false });
  },
  getUserPosts: async (userId) => {
    set({ userPosts: null });
    const { data, error } = await supabase
      .from("blogposts")
      .select(
        // TODO: refactor this
        `id,
      title, text, imageUrl, startDate, endDate,
      locations (location, country, lon, lat),
      authors (name, avatarUrl)`
      )
      .eq("author_id", userId)
      .order("startDate", { ascending: false });
    set({ userPosts: data });
    if (error) {
      console.log(error);
    }
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
  isAuthenticated: false,
  userId: null,
  userName: null,
  userDescription: null,
  avatarUrl: null,
  userPosts: null,
  refreshAuth: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      set({ isAuthenticated: true });
      set({ userId: data.session.user.id });
    } else {
      set({ isAuthenticated: false });
      set({ userId: null });
    }
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
    await get().refreshAuth();
  },
  updateUserData: async (formData) => {
    let imageUrl = await get().avatarUrl;
    const userId = await get().userId;
    if (formData.image[0]) {
      const fileExt = formData.image[0].name.split(".").pop();
      const fileName = `${Math.random()}-${formData.name}.${fileExt}`;
      const { error: fileuploadErr } = await supabase.storage
        .from("avatars")
        .upload(fileName, formData.image[0]);
      fileuploadErr && console.log(fileuploadErr);
      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);
      imageUrl = urlData.publicUrl;
    }
    const { data, error } = await supabase
      .from("authors")
      .update({
        name: formData.name,
        avatarUrl: imageUrl,
        description: formData.description,
      })
      .eq("id", userId)
      .select();
    console.log(data);
    error && console.log(error);
    await get().getUserData;
  },
  createNewPost: async (formData) => {
    const fileName = `${Math.random()}-${formData.image[0].name}`;
    const { error: fileuploadErr } = await supabase.storage
      .from("locations")
      .upload(fileName, formData.image[0]);
    fileuploadErr && console.log(fileuploadErr);
    const { data: urlData } = supabase.storage
      .from("locations")
      .getPublicUrl(fileName);
    const imageUrl = urlData.publicUrl;

    let locationId;
    const { data: locationData, error } = await supabase
      .from("locations")
      .select("id")
      .eq("location", formData.location);
    console.log(locationData);
    if (locationData[0]) {
      locationId = locationData[0].id;
    } else {
      const { data, error } = await supabase
        .from("locations")
        .insert({
          location: formData.location,
          country: formData.country,
          lon: formData.longitude,
          lat: formData.latitude,
        })
        .select("id");
      locationId = data[0].id;
      error && console.log(error);
    }
    error && console.log(error);

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
  loading: false,
  showMobileMenu: false,
  toggleMobileMenu: () => {
    set((state) => ({ showMobileMenu: !state.showMobileMenu }));
  },
  closeMobileMenu: () => {
    set({ showMobileMenu: false });
  },
}));

export default useStore;
