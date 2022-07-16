import {useArrayToMap} from "./useArrayToMap.js";
import {renderHook, act} from '@testing-library/react-hooks'

describe('testing useArrayToMap', () => {

    it('should be defined', () => {
        const {result} = renderHook(() => useArrayToMap([], 'id'))
        expect(result.current).toBeDefined()
    })

    fit('should mapping array to map using key', () => {
        const array = [{id:1, value:10},{id:2,value:20}]
        const {result} = renderHook(() => useArrayToMap(array, 'id'))
        const map = result.current
        expect(map.get(1)).toMatchObject({id:1, value:10})
        expect(map.get(2)).toMatchObject({id:2, value:20})
    })
})