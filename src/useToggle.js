import {useState} from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue => !!value ?? !currentValue)
    }

    return [value, toggleValue]
}


