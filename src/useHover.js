import useEventListener from "./useEventListener";
import {useState} from "react";

export default useHover;

export  function useHover(ref) {
    const [isHovered, setIsHovered] = useState(false);

    useEventListener('mouseover', () => setIsHovered(true), ref.current);
    useEventListener('mouseout', () => setIsHovered(false), ref.current);

    return isHovered;
}