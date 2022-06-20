import {useCallback, useEffect, useState} from "react";

function readCookie(name) {
    const cookie = document.cookie.split(";")
        .find(c=>c.trim().startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
}

function writeCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

export default useCookie;

export function useCookie(name, defaultValue="", {days = 365} = {}) {
    const [value, setValue] = useState(() => {
        const cookie = readCookie(name);
        if (cookie) return cookie;
        writeCookie(name, defaultValue, days);
        return defaultValue;
    });

    const updateCookie = useCallback((newValue, _days) => {
        writeCookie(name, newValue, _days ?? days);
        setValue(newValue);
    }, [name, days]);

    const deleteCookie = useCallback(name => {
        writeCookie(name, "", -1);
        setValue(null)
    }, [name]);

    return [value, updateCookie, deleteCookie];

}
