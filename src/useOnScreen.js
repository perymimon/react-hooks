import {useEffect, useState} from "react";

export default useOnScreen;

export function useOnScreen(ref, rootMargin = "0px") {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ref.current == null) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting), {rootMargin});
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref.current, rootMargin])

    return isVisible;
}

