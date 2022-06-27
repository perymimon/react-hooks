import {useEffect, useRef} from "react";

export default function useRenderCount() {
    const counts = useRef({loops: 0, fullRender: 1});

    counts.current.loops++;
    useEffect(() => {
        counts.current.fullRender++;
    });
    return counts.current;
}