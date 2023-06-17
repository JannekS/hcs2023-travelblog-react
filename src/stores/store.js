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
  loading: false,
  showLoginDialog: false,
  toggleLoginDialog: () => {
    set((state) => ({ showLoginDialog: !state.showLoginDialog }));
    set({ showMobileMenu: false });
  },
  closeLoginDialog: () => set({ showLoginDialog: false }),
}));

export default useStore;
