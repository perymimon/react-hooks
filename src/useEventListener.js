import {useEffect, useRef} from "react";

export default useEventListener;

export function useEventListener(eventName, handler, element = window) {
    const savedHandler = useRef(handler);
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const dom = 'current' in element? element.current : element;
        if (dom == null) return;
        const handler = e => savedHandler.current(e);
        dom.addEventListener(eventName, handler);

        return () => dom.removeEventListener(eventName, handler);
    }, [eventName, element, element?.current])

}
