import {useEffect, useRef} from "react";

export default useUpdateEffect;

export function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true);
    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    },dependencies);
}