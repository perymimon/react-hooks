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
    // Initialising the Jooks wrapper
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
        let [map] = result.current
        act(() => map.set('foo', 3));
        // expect hook rerender
        [map] = result.current
        expect(map.get('foo')).toBe(3)
        expect(result.current[1]).toBe(2);

        [map] = result.current
        act(() => map.set('foo', 4))
        expect(result.current[1]).toBe(3)
    });


});