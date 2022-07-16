import {useEffect} from "react";
import useTimeout from "./useTimeout.js";

export default useDebounceCallback;

export function useDebounceCallback(callback, delay, dependencies) {
    const {reset, clear} = useTimeout(callback, delay)
    useEffect(() => reset, [...dependencies, reset])
    useEffect(() => clear, [])
}