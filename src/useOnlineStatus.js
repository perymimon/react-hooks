import {useDebugValue, useState} from "react";
import useEventListener from "./useEventListener.js";

export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useDebugValue(isOnline);
    useEventListener('online', () => setIsOnline(true));
    useEventListener('offline', () => setIsOnline(false));

    return isOnline;
}