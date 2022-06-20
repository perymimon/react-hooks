import {useLocalStorage} from "./useStorage";
import useMediaQuery from "./useMediaQuery";
import {useEffect} from "react";

export default function useDarkMode(callback) {
    const [darkMode, setDarkMode]=useLocalStorage('useDarkMode', false);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const enabled = darkMode ?? prefersDarkMode;

    useEffect(() => {
        document.body.classList.toggle('dark-mode', enabled);
    },[enabled]);

    return [enabled, setDarkMode];
}