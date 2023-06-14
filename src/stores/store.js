import { create } from "zustand";

const useStore = create((set) => ({
  showLoginDialog: false,
  toggleLoginDialog: () => {
    set((state) => ({ showLoginDialog: !state.showLoginDialog }));
    set({ showMobileMenu: false });
  },
  closeLoginDialog: () => set({ showLoginDialog: false }),
}));

export default useStore;
