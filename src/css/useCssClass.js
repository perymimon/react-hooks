import { useDebugValue } from "react";

const ignoreList = ["undefined", "null", "", "0", "false", "NaN", "Infinity", "true"];

export function useCssClass(baseClasses, classObject) {
    if (!classObject) return useCssClass('', baseClasses);
    let classes = Object.keys(classObject)
        .filter(key => !ignoreList.includes(key) && classObject[key])
        .join(" ");

    classes += " " + baseClasses;
    useDebugValue(classes);

    return classes;
}

export default useCssClass;