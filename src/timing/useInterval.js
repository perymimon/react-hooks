import { useRef, useEffect, useCallback } from 'react';
import useLatest from '../advence/useLatest.js';

export function useInterval(callback, delay, options) {
    const immediate = options?.immediate;
    const autoStart = options?.autoStart ?? true;

    const fnRef = useLatest(callback);
    const timerRef = useRef();

    const restart = useCallback(() => {
        if (Number(delay) != delay || delay <= 0) return;
        if (immediate) {
            fnRef.current();
        }
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            fnRef.current();
        }, delay);
    },[]);

    const clear = useCallback(() => {
        clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
        if(autoStart) restart();
        return clear;
    }, [delay]);

    return {clear, restart};
}