import {useState} from "react";


export default function useStateWithValidation(validator, initialState ) {
    const [state, setState] = useState(initialState);
    const [isValid, setIsValid] = useState(null);

    const setValue = (value) => {
        const isValid = validator(value);
        setState(value);
        setIsValid(isValid);
    }

    return [state, setValue, isValid];
}