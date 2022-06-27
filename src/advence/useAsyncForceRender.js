export default useAsyncForceRender
import {useRef, useLayoutEffect, useState, useCallback} from "react";

export function useAsyncForceRender() {
    const resolver = useRef(null);
    const [referenceBuster, forceRender] = useState([]);
    useLayoutEffect(_ => {
        resolver.current?.(referenceBuster)
        resolver.current = null;
    })

    const render = useCallback(_ => {
        if( resolver.current ) return resolver.current;
        return new Promise((res, rej) => {
            resolver.current = res;
            forceRender([])
        })
    }, [])

    return [render, referenceBuster];
}
