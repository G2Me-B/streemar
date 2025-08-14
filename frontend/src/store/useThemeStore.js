import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("streamer-theme") || "aqua",
    setTheme: (theme) => {
        localStorage.setItem("streamer-theme", theme);
        set({ theme });
    },
}));