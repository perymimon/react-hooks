import useEventListener from "./useEventListener.js";
import useTimeout from "./timing/useTimeout.js";
import useEffectOnce from "./useEffectOnce.js";

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