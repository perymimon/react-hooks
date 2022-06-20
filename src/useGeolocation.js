import {useEffect} from "react";

export default  useGeolocation;

export function useGeolocation({maximumAge = 0, timeout = 5000, enableHighAccuracy = false}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        function success(pos) {
            setData(pos.coords);
            setLoading(false);
            setError(null);
        }

        function error(err) {
            setError(err);
            setLoading(false);
        }

        if (!navigator.geolocation) {
            setError({message: 'Geolocation is not supported by your browser'});
            setLoading(false);
            return null;
        }
        const options = {maximumAge, timeout, enableHighAccuracy}
        navigator.geolocation.getCurrentPosition(success, error, options);
        const id = navigator.geolocation.watchPosition(success, error, options);
        return () => navigator.geolocation.clearWatch(id);
    }, [maximumAge, timeout, enableHighAccuracy]);

    return {data, loading, error};
}