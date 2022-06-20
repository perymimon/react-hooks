import {useCallback, useEffect, useState} from "react";

function useStorage(key, defaultValue, storage) {
    const [value, setValue] = useState(() => {
        const value = storage.getItem(key)
        if (value != null) return JSON.parse(value)
        if (typeof defaultValue === "function") return defaultValue()
        return defaultValue
    });

    useEffect(() => {
        if (value === undefined) storage.removeItem(key)
        storage.setItem(key, JSON.stringify(value))
    }, [key, value, storage])

    const remove = useCallback(() => void setValue(undefined), [])

    return [value, setValue, remove];
}

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, sessionStorage)
}

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, localStorage)
}
