import {useDebugValue} from "react";

export function useCssClass(classObject) {
    let classes = Object.keys(classObject)
        .filter(key => classObject[key])
        .join(" ");

    useDebugValue(classes);

    return classes;
}

export default useCssClass;