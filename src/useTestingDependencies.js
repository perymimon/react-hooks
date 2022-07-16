import {useRefLetMap} from "@perymimon/react-hooks";
import {useCallback} from "react";

function isEqual(a, b) {
    if (typeof a !== typeof b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}


export function useTestingDependencies(items, getDependencies) {
    let map = useRefLetMap((item) => getDependencies?.(item) ?? true);

    const testChanged = useCallback((item) => {
        if(!getDependencies) return true;
        const dependencies = map.get(item);
        const newDependencies = getDependencies?.(item) ?? getDependencies;
        const isChanged = !isEqual(dependencies, newDependencies);
        map.set(item, newDependencies);
        return isChanged;
    },[getDependencies])

    useCallback(() => () => map.clear(), [])

    return testChanged
}