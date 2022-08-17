import { useRef, useEffect, useCallback } from 'react';
import useLatest from 'advence/useLatest';

export function useInterval(callback, delay, options) {
    const immediate = options?.immediate;

    const fnRef = useLatest(callback);
    const timerRef = useRef();

    useEffect(() => {
        if (Number(delay) != delay || delay <= 0) return;

        if (immediate) {
            fnRef.current();
        }
        timerRef.current = setInterval(() => {
            fnRef.current();
        }, delay);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [delay]);

    const clear = useCallback(() => {
        clearInterval(timerRef.current);
    }, []);

    return clear;
}

