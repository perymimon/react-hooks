//https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae
import {useCallback, useLayoutEffect} from "react";
import {useLetMap} from "../advence/useLetMap.js";



export function useNodeTraceMovement() {
    const memoryByKey = useLetMap()
    const {current: memoryByNode} = useRef(new WeakMap())
    const setRef = useCallback((node) => {
        let state = {
            offsetLeft: node.offsetLeft,
            offsetTop: node.offsetTop,
            dx: 0,
            dy: 0,
            node,

        }
        memoryByKey.set(key, state)
        memoryByNode.set(node, state)
    }, [])

    const getMove = useCallback((node) => {
        const {dx, dy} = memory.get(node)
        return {dx, dy}
    })

    useLayoutEffect(() => {
        for (let [node, state] of memory) {
            const {offsetLeft, offsetTop} = node;
            state.dx = (state.offsetLeft - offsetLeft) || 0;
            state.dy = (state.offsetTop - offsetTop) || 0;
            state.offsetLeft = offsetLeft;
            state.offsetTop = offsetTop;
        }
    })

    return [getMove, setRef]
}

export default useNodeTraceMovement