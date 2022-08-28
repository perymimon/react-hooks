import { useRef, useEffect, useCallback } from 'react';
import useLatest from '../advence/useLatest.js';
import useTimeout from './useTimeout.js';

export function useInterval(callback, interval, options) {
    options.immediate ??= false;
    options.delay ??= 0;
    options.autoStart ??= true;

    const fnRef = useLatest(callback);
    const fnInitRef = useLatest(options.init);
    const timerRef = useRef();

    var intClear = useCallback(() => clearInterval(timerRef.current), []);

    var intRestart = useCallback(() => {
        if (Number(interval) != interval || interval <= 0) return;
        fnInitRef.current?.();
        if (options.immediate) {
            fnRef.current();
        }
        clear();
        timerRef.current = setInterval(() => {
            fnRef.current();
        }, interval);
    }, []);

    const { clear: outClear, restart: outRestart } =
        useTimeout(intRestart, options.delay, { autoStart: false });

    var clear = useCallback(() => {
        options.autoStart = false;
        intClear();
        outClear();
    }, [intClear, outClear]);

    var restart = useCallback(() => {
        options.autoStart = true;
        if (options.delay > 0) outRestart();
        else intRestart();
    }, [intRestart, outRestart]);

    useEffect(() => {
        if (options.autoStart) restart();
        return clear;
    }, [interval]);

    return { clear, restart };
}