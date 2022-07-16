import {useDebugValue, useRef} from "react";

function isEqual(a, b) {
    if (typeof a !== typeof b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export default useRun;

export function useRun(callback, dependencies) {
    const value = useRef(null);
    const prevDependencies = useRef();

    if (!isEqual(prevDependencies.current, dependencies)) {
        prevDependencies.current = dependencies;
        (value.current = callback())
    }

    useDebugValue(value.current)
    return value.current


}

/** rerun just when dependencies true or no previous run */
export function useRunWhenRise(callback, condition) {
    const value = useRef(null);
    const prevCondition = useRef(false);
    condition = typeof condition === 'function' ? condition() : condition;
    if (value.current === null || condition && !prevCondition.current) {
        prevCondition.current = condition;
        value.current = callback();
    }
    useDebugValue(value.current)
    return value.current;
}