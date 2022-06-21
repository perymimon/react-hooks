import {useEffect, useState} from "react";

export default function useSize(ref) {
    const [size, setSize] = useState({})
    useEffect(() => {
        if (ref.current == null) return
        let observer = new ResizeObserver(([entry]) => setSize(entry.contentRect) )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref.current])

    return size
}