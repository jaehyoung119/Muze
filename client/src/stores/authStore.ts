import { create } from "zustand";
import type { User } from "../types/User";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  user: User | null;
  login: (token: string) => void;
  logout: () => void; // ✅ 추가
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
  login: (token) => {
    localStorage.setItem("token", token);
    set({ token, isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null, isLoggedIn: false, user: null });
  },
  setUser: (user) => set({ user }),
}));
