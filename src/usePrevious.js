import {useDebugValue, useRef} from "react";

export default usePrevious;

export function usePrevious(value){
    const currentRef = useRef(value)
    const previousRef= useRef()
    useDebugValue(currentRef.current)

    if(value !== currentRef.current){
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}