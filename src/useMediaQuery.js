import {useDebugValue, useEffect, useState} from "react";
import useEventListener from "./useEventListener.js";

export default function useMediaQuery(mediaQuery){
    const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia(mediaQuery));
    const [isMatches, setIsMatches] = useState(mediaQueryList.matches);
    useDebugValue(isMatches);

    useEffect(() => {
        const list=window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatches(list.matches);
    },[mediaQuery])

    useEventListener('change', (e) => setIsMatches(e.matches), mediaQueryList);

    return isMatches;
}