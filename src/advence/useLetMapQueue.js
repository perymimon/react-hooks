
import { useRef, useState} from "react";
import {useLetMap} from "./useLetMap.js";

export function useLetMapQueue({renderOnTipOnly = true}={}) {
    const map = useLetMap([])
    const [value, forceRender] = useState([])
    let tipUpdated = false

    function push(key, ...values) {
        let array = map.let(key)
        tipUpdated = (array.length === 0)
        array.push(...values)
        if ( !tipUpdated && renderOnTipOnly) return tipUpdated
        forceRender([])
        return tipUpdated
    }

    function shift(key) {
        let array = map.let(key)
        tipUpdated = array.length > 0
        if (tipUpdated) forceRender([])
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