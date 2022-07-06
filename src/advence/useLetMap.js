import {useDebugValue, useReducer, useRef} from "react";
import {LetMap} from "@perymimon/let-map"
import useRun from "../useRun.js";

export function useLetMap(struct) {
    const letMapRef = useRef(null)
    const [_, forceRender] = useReducer(c=>c + 1)

    useRun(() => {
        letMapRef.current = new LetMap(struct)
        letMapRef.current.on('update',forceRender)
    }, [])

    useRun(() => {
        letMapRef.current.setStruct(struct)
    }, [struct])

    useDebugValue(letMapRef.current.values())

    return letMapRef.current
}

export function useRefLetMap(struct) {
    const letMapRef = useRef(null)

    useRun(() => {
        letMapRef.current = new LetMap(struct)
    }, [])

    useRun(() => {
        letMapRef.current.setStruct(struct)
    }, [struct])

    useDebugValue(letMapRef.current)

    return letMapRef.current
}
