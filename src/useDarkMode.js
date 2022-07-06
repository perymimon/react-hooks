import {useLocalStorage} from "./useStorage.js";
import useMediaQuery from "./useMediaQuery.js";
import {useEffect} from "react";

export default function useDarkMode(callback) {
    const [darkMode, setDarkMode]=useLocalStorage('useDarkMode', false);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const enabled = darkMode ?? prefersDarkMode;

    useEffect(() => {
        document.body.classList.toggle('dark-mode', enabled);
        callback?.()
    },[enabled]);

    return [enabled, setDarkMode];
}