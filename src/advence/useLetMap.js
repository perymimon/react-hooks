import {useRef, useState} from "react";
import {LetMap} from "@perymimon/let-map"
import useRun from "../useRun";

console.log('----------34-----------', useRef, 'useRef')

export function useLetMap(struct) {
    const letMapRef = useRef(null)
    const [value, forceRender] = useState([])

    useRun(() => {
        letMapRef.current = new LetMap(struct)
        letMapRef.current.on('update', () => forceRender([]))
    }, [])

    useRun(() => {
        letMapRef.current.setStruct(struct)
    }, [struct])

    return letMapRef.current
}
