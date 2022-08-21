import useLatest from "../advence/useLatest.js";
import {useCallback, useDebugValue, useEffect, useRef} from "react";

export default useTimeout;

export function useTimeout(callback, delay, options = {}) {
    options.autoStart ??= true;

    const callbackRef = useLatest(callback);
    const timeoutRef = useRef();


    const clear = useCallback(() => {
        options.autoStart = false;
        clearTimeout(timeoutRef.current);
    })

    const restart = useCallback(() => {
        options.autoStart = true;
        clear();
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    })

    useEffect(() => {
        if(options.autoStart) restart();
        return clear;
    }, [restart, clear, delay]);


    return {clear, restart};
}