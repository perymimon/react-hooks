import useEventListener from "./useEventListener";
import {useState} from "react";
import useTimeout from "./useTimeout";
import useEffectOnce from "./useEffectOnce";

export default useLongPress

export function useLongPress(ref, callback, {delay= 250} = {}) {
    const {reset, clear} = useTimeout(callback, delay)
    useEffectOnce(clear)

    useEventListener('mousedown', reset, ref.current)
    useEventListener('touchstart', clear, ref.current)

    useEventListener('mouseup', clear, ref.current)
    useEventListener('touchend', clear, ref.current)
    useEventListener('mouseout', clear, ref.current)
    useEventListener('touchcancel', clear, ref.current)
    useEventListener('mouseleave', clear, ref.current)
}