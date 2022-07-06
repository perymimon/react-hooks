import {useDebugValue, useEffect, useRef} from "react";
import useRun from "./useRun.js";

export default usePrevious;

// export function usePrevious(value){
//     const currentRef = useRef(value)
//     const previousRef= useRef()
//     useDebugValue(previousRef.current)
//
//     if(value !== currentRef.current){
//         previousRef.current = currentRef.current
//         currentRef.current = value
//     }
//
//     return previousRef.current
// }

export function usePrevious(value, initialValue, changedTracker=value) {
    const ref = useRef({value: initialValue, ver: 1});
    const {current: {value: before, ver}} = ref;
    useRun(() => {
        ref.current = {value, ver: ver + 1};
    }, [changedTracker].flat());
    useDebugValue(before, ver)
    return [before, ver];
}

export function useLazyPrevious(value, initialValue, changedTracker=value) {
    const ref = useRef({value: initialValue, ver: 1});
    const {current: {value: before, ver}} = ref;
    useEffect(() => {
        ref.current = {value, ver: ver + 1};
    }, [changedTracker].flat());
    useDebugValue(before, ver)
    return [before, ver];
}