// from Vitali Zaidman article https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae


import {useCallback, useState} from "react";

export function useStateRef(processNode) {
    const [node, setNode] = useState(null);
    const setRef = useCallback(newNode => {
        setNode(processNode(newNode));
    }, [processNode]);
    return [node, setRef];
}

export default useStateRef;

/**
 // how it's used
 const [clientHeight, setRef] = useStateRef(node => (node?.clientHeight || 0));

 useEffect(() => {
  console.log(`the new clientHeight is: ${clientHeight}`);
 }, [clientHeight])

 // <div ref={setRef}....

 // <div>the current height is: {clientHeight}</div>

 */

