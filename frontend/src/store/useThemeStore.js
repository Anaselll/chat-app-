import { create } from "zustand";
export const useThemeStore=create((set)=>{
    return {
        theme:localStorage.getItem('chat-theme')|| 'light', 
        setTheme:(theme)=>{
            localStorage.setItem('chat-theme',theme)
            set({theme})
        },
    }
})