import {useEffect, useRef} from "react";

export default useEventListener;

export function useEventListener(eventName, handler, element = window) {
    const savedHandler = useRef(handler);
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (element == null) return;
        const handler = e => savedHandler.current(e);
        element.addEventListener(eventName, handler);

        return () => element.removeEventListener(eventName, handler);
    }, [eventName, element])

}
