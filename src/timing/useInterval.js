import { useRef, useEffect, useCallback } from 'react';
import useLatest from '../advence/useLatest.js';

export function useInterval(callback, delay, options) {
    const immediate = options?.immediate;
    options.autoStart ??= true;

    const fnRef = useLatest(callback);
    const timerRef = useRef();

    const clear = useCallback(() => {
        options.autoStart = false;
        clearInterval(timerRef.current);
    }, []);

    const restart = useCallback(() => {
        if (Number(delay) != delay || delay <= 0) return;
        options.autoStart = true;
        if (immediate) {
            fnRef.current();
        }
        clear();
        timerRef.current = setInterval(() => {
            fnRef.current();
        }, delay);
    },[]);

    useEffect(() => {
        if(autoStart) restart();
        return clear;
    }, [delay]);

    return {clear, restart};
}