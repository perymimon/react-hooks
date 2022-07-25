import {useDebugValue} from "react";

const ignoreList = ["undefined", "null", "", "0", "false", "NaN", "Infinity", "true"];

export function useCssClass(classObject) {
    let classes = Object.keys(classObject)
        .filter(key => !ignoreList.includes(key) && classObject[key])
        .join(" ");

    useDebugValue(classes);

    return classes;
}

export default useCssClass;