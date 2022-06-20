import {useCallback, useDebugValue, useEffect, useRef} from "react";

export default useTimeout;

export function useTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    useDebugValue(delay);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    })

    const clear = useCallback(() => {
        clearTimeout(timeoutRef.current);
    })

    useEffect(() => {
        set();
        return clear;
    }, [set, clear, delay]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [set, clear]);

    return {clear, reset};
}


