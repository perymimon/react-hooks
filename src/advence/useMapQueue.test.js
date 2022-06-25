import {renderHook, act} from '@testing-library/react-hooks'

import {useLetMapQueue} from "./useMapQueue.js";

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
        ({rerender, result} = renderHook(() => useLetMapQueue()))
    })

    it('should start empty', () => {
        let {map} = result.current
        expect(map).toBeDefined()
        expect(map.size).toBe(0)
    });

    it('push method', async () => {
        let {map, push} = result.current

        expect(map.get('foo')).toBeUndefined();

        act(() => push('foo', 3));
        ({map} = result.current)
        expect(map.get('foo')).toMatchObject([3]);

        act(() => push('foo', 4, 4))
        expect(map.get('foo')).toMatchObject([3, 4, 4]);
    })

    it('shift method', async () => {
        let {map, push, shift} = result.current

        act(() => shift('foo', 3));
        expect(map.get('foo')).toMatchObject([]);

        act(() => push('foo', 3, 4, 5));
        expect(map.get('foo')).toMatchObject([3, 4, 5]);

        act(() => shift('foo'));
        expect(map.get('foo')).toMatchObject([4, 5]);

        act(() => shift('foo'));
        expect(map.get('foo')).toMatchObject([5]);

        act(() => push('foo', 3, 4));
        act(() => shift('foo'));
        expect(map.get('foo')).toMatchObject([3, 4]);
    })

    it('peek & peekLast method', async () => {
        let {push, peek, peekLast} = result.current

        act(() => push('foo', 3, 4, 5));
        act(() => push('bar', 6, 7, 8));
        expect(peek('foo')).toBe(3);
        expect(peek('bar')).toBe(6);

        expect(peekLast('foo')).toBe(5);
        expect(peekLast('bar')).toBe(8);


    })

});