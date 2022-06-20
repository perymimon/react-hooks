import {useCallback, useDebugValue, useRef, useState} from "react";

export default useStateWithHistory;

export function useStateWithHistory(defaultValue, {capacity = 10} = {}) {
    const [value, setState] = useState(defaultValue);
    const historyRef = useRef([value]);
    const pointerRef = useRef(0);

    const set = useCallback((v) => {
        const {current: point} = pointerRef;
        const {current: history} = historyRef;
        const resolvedValue = typeof v === "function" ? v(value) : v;

        if (historyRef.current[point] === resolvedValue) return
        history.length = point + 1;
        history.push(resolvedValue);
        history.splice(-capacity);
        pointerRef.current = history.length - 1;
        setState(resolvedValue);
    }, [capacity, value]);

    const back = useCallback(() => {
        if (pointerRef.current <= 0) return
        pointerRef.current--;
        setState(historyRef.current[pointerRef.current]);
    }, []);

    const forward = useCallback(() => {
        let {current: point} = pointerRef;
        let {current: history} = historyRef;
        if (point >= history.length - 1) return
        pointerRef.current++;
        setState(history[pointerRef.current]);
    }, [])

    const go = useCallback((n) => {
        const {max, min} = Math;
        let {current: point} = pointerRef;
        let {current: history} = historyRef;
        point = min(max(point + n, 0), history.length-1)
        pointerRef.current = point;
        setState(history[point]);
    }, [])

    useDebugValue([value, pointerRef.current, historyRef.current]);
    return [value, set, {
        history: historyRef.current,
        pointer: pointerRef.current,
        back, forward, go
    }]
}