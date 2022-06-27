
import { useRef, useState, useCallback} from "react";
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
        if(array.length === 1){
            map.delete(key)
        }
        return array.shift()
    }

    function peek(key) {
        let array = map.get(key)
        if(!array) return null
        return array[0] ?? null
    }

    function peekLast(key) {
        let array = map.let(key)
        return array.at(-1)
    }

    function deleteKey(key) {
        return map.delete(key)
    }

    return {map, push, shift, peek, peekLast, deleteKey}
}