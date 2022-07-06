import useEventListener from "./useEventListener.js";

export default useClickOutside;

export function useClickOutside(ref, callback) {
    useEventListener('click', (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }, document);
}