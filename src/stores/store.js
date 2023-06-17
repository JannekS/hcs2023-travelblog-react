import { create } from "zustand";
import supabase from "../utils/supabaseClient";

const useStore = create((set) => ({
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
  isAuthenticated: false,
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    data.user && set({ isAuthenticated: true });
  },

  logout: async () => {},
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
