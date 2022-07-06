import useEventListener from "./useEventListener.js";
import {useState} from "react";

export function useWindowSize() {
    const isClient = typeof window === 'object';
    const [windowSize, setWindowSize] = useState({
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
    })

    useEventListener('resize', () => {
        setWindowSize({
            width: window.innerWidth, height: window.innerHeight
        })
    }, window)

    return windowSize
}
