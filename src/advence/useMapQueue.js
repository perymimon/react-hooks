import {LetMap} from "@perymimon/let-map"

import { useRef, useState} from "react";
import useRun from "../useRun";

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


export function useLetMapQueue({renderOnTipOnly = true}={}) {
    const map = useLetMap([])
    const [value, forceRender] = useState([])

    function push(key, ...values) {
        let array = map.let(key)
        array.push(...values)
        if (array.length > 1 && renderOnTipOnly) return;
        forceRender([])
    }

    function shift(key) {
        let array = map.let(key)
        if (array.length > 0) forceRender([])
        return array.shift()
    }

    function peek(key) {
        let array = map.let(key)
        return array[0]
    }

    function peekLast(key) {
        let array = map.let(key)
        return array.at(-1)
    }

    return {map, push, shift, peek, peekLast}
}