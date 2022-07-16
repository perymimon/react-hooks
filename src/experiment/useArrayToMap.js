import useRun from "../useRun.js";
import {useDebugValue, useEffect, useState} from "react";

export function useArrayToMap(array, key) {
    const [map] = useState(()=> new Map());

    useRun(function memoizeStates() {
        map.clear()
        for (let item of array) {
            map.set(item[key], item)
        }
    }, [array])
    useDebugValue(key, map.values());
    useEffect(() => ()=>map.clear(), [map])

    return map
}

export default useArrayToMap;