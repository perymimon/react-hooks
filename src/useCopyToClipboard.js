import {useState} from "react";

export default useCopyToClipboard;

export  function useCopyToClipboard() {
    const [value, setValue] = useState();
    const [success, setSuccess] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                setSuccess(true)
                setValue(value)
            })
            .catch(() => setSuccess(false));

    }
    //
    // const copyToClipboard = () => {
    //     const result = copy(text, options)
    //     if(result) setValue(text)
    //     setSuccess(result)
    // }

    return [copyToClipboard,{value,success}]

}