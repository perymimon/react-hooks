import {useCallback, useEffect, useRef, useState} from "react";
import useTimeout from "./useTimeout.js";

export default useDebounceState;

export function useDebounceState(initValue, delay) {
    const [value, setValue] = useState(null);
    const lastValue = useRef(initValue);
    const {reset} = useTimeout(()=>setValue(lastValue.current), delay)
    const set = useCallback(v => {
        reset()
        lastValue.current = v
    },[])

    useEffect(() => reset, [initValue, reset])
    return [value, set]
}

