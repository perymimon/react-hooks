import {useCallback, useRef} from "react";

export function useRefWithCallback(onMount, onUnmount) {
    const nodeRef = useRef(null);

    return useCallback(node => {
        if (!nodeRef.current) {
            onUnmount(nodeRef.current);
        }

        nodeRef.current = node;

        if (nodeRef.current) {
            onMount(nodeRef.current);
        }
    }, [onMount, onUnmount]);

}

export default useRefWithCallback;

/**
const onMouseDown = useCallback(e => console.log('hi!', e.target.clientHeight), []);

const setDivRef = useRefWithCallback(
    node => node.addEventListener("mousedown", onMouseDown),
    node => node.removeEventListener("mousedown", onMouseDown)
);

 // <div ref={setDivRef}
 **/