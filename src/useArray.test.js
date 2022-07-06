import {renderHook, act} from '@testing-library/react-hooks'

import useArray from "./useArray.js";

// function beforeHook(cb){
//     let output = {};
//     beforeEach(() => {
//       Object.assign(output, renderHook(cb));
//     })
//     return output;
// }

describe('testing useArray', () => {
    // Initialising the Jooks wrapper
    let rerender, result, unmount, waitFor, waitForNextUpdate, waitForValueToChange

    beforeEach(() => {
        ({
            rerender, result, unmount, waitFor,
            waitForNextUpdate, waitForValueToChange
        } = renderHook(() => useArray([1, 2, 3])))
    })

    // beforeHook(() => useArray([1, 2, 3]))

    it('It should give the correct initial values', () => {
        let {push, array} = result.current
        expect(array).toMatchObject([1, 2, 3]);
    });

    test('push should work', async () => {
        let {push, array} = result.current
        act(() => push(3));
        ({array} = result.current)
        expect(array).toMatchObject([1, 2, 3, 3]);

        act(() => result.current.push(4, 4))
        expect(result.current.array).toMatchObject([1, 2, 3, 3, 4, 4]);
    })


});