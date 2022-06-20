import useRenderCount from "./useRenderCount";
import {useDebugValue, useEffect, useRef} from "react";

export default useDebugInfo;

export function useDebugInfo(componentName, props) {
    const count = useRenderCount();
    const changedProps = useRef({});
    const previousProps = useRef(props);
    const lastRender = useRef(Date.now());

    const propsName = [...Object.keys(props), ...Object.keys(previousProps.current)];
    changedProps.current = propsName.reduce((acc, key) => {
        if(props[key] === previousProps.current[key]) return acc;
        acc[key] = {previous: previousProps.current[key], current: props[key]};
        return acc;
    })

    const  info = {
        changedProps: changedProps.current,
        lastRender: lastRender.current,
        timeSinceLastRender: Date.now() - lastRender.current
    }

    useEffect(() => {
        previousProps.current = props;
        lastRender.current = Date.now();
        console.info(`[debug-info] ${componentName} rendered ${count} times`, info);
        useDebugValue({...info, count});
    })

    return {...info, count};
}
