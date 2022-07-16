import {renderHook, act} from '@testing-library/react-hooks'

import {useLetMap} from "./useLetMap.js";
import useRenderCount from "../debuging/useRenderCount.js";

// function beforeHook(cb){
//     let output = {};
//     beforeEach(() => {
//       Object.assign(output, renderHook(cb));
//     })
//     return output;
// }

describe('testing useLetMapQueue', () => {
    let rerender, result
    beforeEach(() => {
        ({rerender, result} = renderHook(() => {
            return [useLetMap(), useRenderCount()]
        }))
    })

    it('should start empty', () => {
        let [map, count] = result.current
        expect(map).toBeDefined()
        expect(map.size).toBe(0)
    });

    it('set', () => {
        let [map, count] = result.current;
        act(() => map.set('foo', 3));
        // expect hook rerender
        [map, count] = result.current;
        expect(map.get('foo')).toBe(3);
        expect(count.fullRender).toBeGreaterThanOrEqual(3);

        [map] = result.current;
        act(() => map.set('foo', 4));
        [,count] = result.current;
        expect(count.fullRender).toBeGreaterThanOrEqual(3);
    });


});