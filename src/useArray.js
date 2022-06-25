import {useDebugValue, useState} from "react";

export default useArray;

export  function useArray(initArray) {
    const [array, setArray] = useState(initArray)
    useDebugValue(array)

    function push(...args) {
        setArray(a => a.concat(args))
    }

    function pop() {
        setArray(a => a.slice(0, -1))
    }

    function shift() {
        setArray(a => a.slice(1))
    }

    function unshift(...args) {
        setArray(a => args.concat(a))
    }

    function filter(callback) {
        setArray(a => a.filter(callback))
    }

    function update(index, value) {
        setArray(a => {
            const newArray = [...a]
            newArray[index] = value
            return newArray
        })
    }

    function splice(index, count, ...args) {
        setArray(a => {
            const newArray = [...a]
            newArray.splice(index, count, ...args)
            return newArray
        })
    }

    function clear() {
        setArray([])
    }

    return {array, push, pop, shift, unshift, filter, update, splice, clear}
}