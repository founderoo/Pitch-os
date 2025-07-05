import { create } from 'zustand';
import { auth } from '../firebase';

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  
  setUser: (user) => set({ user, loading: false }),
  
  signInWithGoogle: async () => {
    try {
      const user = await signInWithGoogle();
      set({ user, loading: false });
      return user;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
  
  initializeAuthListener: () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      set({ user, loading: false });
    });
    return unsubscribe;
  }
}));