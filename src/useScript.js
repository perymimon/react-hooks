import useAsync from "./useAsync.js";

export default useAsync;

export function useScript(url){
    return useAsync(() => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },[url]);
}