import {useEffect, useState} from "react";

export default useAsync;

export  function useAsync(callback, dependencies  =[]) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setValue(null);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [...dependencies, callback]);

    return {value, loading, error};
}