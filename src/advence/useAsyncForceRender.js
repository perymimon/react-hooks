import {useRef, useLayoutEffect, useCallback, useReducer} from "react";

export function useAsyncForceRender() {
    const resolver = useRef(null);
    const [referenceBuster, forceRender] =  useReducer(x => x + 1, 0);
    useLayoutEffect(_ => {
        resolver.current?.(referenceBuster)
        resolver.current = null;
    })

    const render = useCallback(_ => {
        if( resolver.current ) return resolver.current;
        return new Promise((res) => {
            resolver.current = res;
            forceRender()
        })
    }, [])

    return [render, referenceBuster];
}

export default useAsyncForceRender