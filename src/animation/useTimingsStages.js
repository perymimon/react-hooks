import {useLayoutEffect} from "react";

//  example: useTimingsStages(ref,[0,1500,2000],['init','stage-1', 'stage-2'])
export function useTimingsStages(ref, timings = [], classes = ['init']) {
    useLayoutEffect(_ => {
        let t = [0, ...timings]
        nextStage(ref, 0, t, classes)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref])
}

function nextStage(ref, index, timings, classes) {
    var {current:dom} = ref;
    var classy = classes[index] ?? `stage-${index}`;
    var timing = timings[index] ;
    if(timing === undefined) return 'finish run';
    dom.classList.add(classy)
    setTimeout(() => {
        requestAnimationFrame(_ => {
            nextStage(ref, index + 1, timings, classes)
            dom.classList.remove(classy)
        })
    }, timing)
}