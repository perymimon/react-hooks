useful react hook collection
----------------------------
simple and useful react hook collection without any dependencies

```cli
npm i @perymimon/react-hooks
```

### useCssClass

get js object with css classes name as keys, true value mean class is active
false value mean class is not active

```js
import {useCssClass} from '@perymimon/react-hooks';

function Demo({user}) {

    const classes = useCssClass({
        'outline': true,
        'error': false,
        'disconnected': user.disconected,
    });
    
    // classes == "outline" || classes = "outline disconnected"
    
    return (
        <div className={classes}>
            <div className="active"></div>
            <div className="disabled"></div>
            <div className="hidden"></div>
        </div>
    );

}


```

```js

###
useToggle

    ```jsx
import {useToggle} from '@perymimon/react-hooks/useToggle';

function Demo() {
    const [isOpen, toggle] = useToggle(false);
    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            {isOpen && <div>Open</div>}
        </div>
    );
}
```

### useArray

```jsx
import {useArray} from '@perymimon/react-hooks/useArray';

function Demo() {
    const {array, push, pop, shift, unshift, filter, update, splice, clear} = useArray(['b', 'a', 'c']);
    return (
        <div>
            <button onClick={() => push('a')}>Push</button>
            <button onClick={() => pop()}>Pop</button>
            <button onClick={() => shift()}>Shift</button>
            <button onClick={() => unshift('a')}>Unshift</button>
            <button onClick={() => filter(v => v !== 'a')}>Filter !a</button>
            <button onClick={() => update(0, 'a')}>Update</button>
            <button onClick={() => splice(1, 1, 'a')}>Splice</button>
            <button onClick={() => clear()}>Clear</button>
            <div>{array.join(',')}</div>
        </div>
    );
}
```

### useDebounceCallback

```jsx
import {useDebounceCallback} from '@perymimon/react-hooks/useDebounceCallback';

function Demo() {
    const [value, setValue] = useState('');
    useDebounceCallback(() => console.log(value), 1000, [value]);

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );
}
```

### useDebounceState

```jsx
import {useDebounceState} from '@perymimon/react-hooks/useDebounceState';

function Demo(value) {
    const [debounceValue, setValue] = useDebounceState('', 1000);

    return (
        <div>
            <input defaultValue={value} onChange={e => setValue(e.target.value)}/>
            <div>{debounceValue}</div>
        </div>
    );
}  
```

### useAsync

```jsx
import {useAsync} from '@perymimon/react-hooks/useAsync';

function Demo() {
    const {value, loading, error} = useAsync(() => {
        return fetch('https://api.github.com/users/perymimon')
            .then(res => res.json());
    });

    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? <div>Error</div> : null}
            {value && <div>{value.name}</div>}
        </div>
    );
}
```

### useFetch

```jsx
import {useFetch} from '@perymimon/react-hooks/useFetch';

function Demo() {
    const {value, loading, error} = useFetch('https://api.github.com/users/perymimon');
    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? <div>Error</div> : null}
            {value && <div>{value.name}</div>}
        </div>
    );
}

```

### useClickOutside

```jsx
import {useClickOutside} from '@perymimon/react-hooks/useClickOutside';

function Demo() {
    useClickOutside(ref, (e) => {
        ref.current.close()
    });

    return (
        <dialog ref={ref}>
            <image src="https://picsum.photos/200"/>
        </dialog>
    );
}
```

### useCookie

```jsx
import {useCookie} from '@perymimon/react-hooks/useCookie';

function Demo() {
    const [value, setValue] = useCookie('name', 'perymimon');
    const daysToExpire = 7;
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value, daysToExpire)}/>
        </div>
    );
}

```

### useLocalStorage

```jsx
import {useLocalStorage} from '@perymimon/react-hooks/useStorage';

function Demo() {
    const [value, setValue] = useLocalStorage('name', 'perymimon');
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );
}

```

```jsx
import {useSessionStorage} from '@perymimon/react-hooks/useStorage';

function Demo() {
    const [value, setValue] = useSessionStorage('name', 'perymimon');
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );
}

```

### useDarkMode

```jsx
import {useDarkMode} from '@perymimon/react-hooks/useDarkMode';

function Demo() {
    const [isDark, setDarkMode] = useDarkMode();
    return (
        <div>
            <button onClick={() => setDarkMode(!isDark)}>Toggle</button>
            {isDark ? <div>Dark</div> : <div>Light</div>}
        </div>
    );
}
```

### useCopyToClipboard

```jsx
import {useCopyToClipboard} from '@perymimon/react-hooks/useCopyToClipboard';

function Demo() {
    const [copied, {value, success}] = useCopyToClipboard()
    const inputRef = useRef();

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={() => copied(inputRef.current.value)}>Copy</button>
            {success ? <div>Copied</div> : null}
            <div>{value}</div>
        </div>
    );
}
```

### useEventListener

```jsx
import {useEventListener} from '@perymimon/react-hooks/useEventListener';

function Demo() {
    const inputRef = useRef();
    useEventListener('keydown', (e) => {
        console.log(e.key);
    }, inputRef.current);

    return <div>
        <input type="text" ref={inputRef}/>
    </div>
}


```

### useGeolocation

```jsx
import {useGeolocation} from '@perymimon/react-hooks/useGeolocation';

function Demo() {
    const {data, loading, error} = useGeolocation();

    return (
        <div>
            {loading ? <div>Loading...</div> : null}
            {error ? <div>Error</div> : null}
            {data && <div>{data.coords.latitude}</div>}
        </div>
    );
}

```

### useHover

```jsx
import {useHover} from '@perymimon/react-hooks/useHover';

function Demo() {
    const elementRef = useRef();
    const isHovered = useHover(elementRef);

    return (
        <div ref={elementRef} {...bind} >
            {isHovered ? <div>Hover</div> : null}
        </div>
    );

}

```

### useLongPress

```jsx
import {useLongPress} from '@perymimon/react-hooks/useLongPress';

function Demo() {
    const elementRef = useRef();
    const [isLongPressed, setLongPressed] = useState(false);
    useLongPress(elementRef, () => setLongPressed(true), {delay: 250});

    return (
        <div ref={elementRef}>
            {isLongPressed ? <div>Long Press</div> : null}
        </div>
    );
}

```

### useMediaQuery

```jsx
import {useMediaQuery} from '@perymimon/react-hooks/useMediaQuery';

function Demo() {
    const smallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            {smallScreen ? <div>Small Screen</div> : null}
        </div>
    )
}
```

### useOnlineStatus

```jsx
import {useOnlineStatus} from '@perymimon/react-hooks/useOnlineStatus';

function Demo() {
    const isOnline = useOnlineStatus();

    return (
        <div>
            {isOnline ? <div>Online</div> : null}
        </div>
    )

}

```

### usePrevious

```jsx
import {previousRef} from '@perymimon/react-hooks/usePrevious';

function Demo() {
    const [value, setValue] = useState(0);
    const previusValue = usePrevious(value);

    function handleOnChange(e) {
        e.preventDefault();
        setValue(e.target.value)
    }

    return (
        <div>
            <select onChange={handleOnChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <div>value: {value}</div>
            <div>previusValue: {previusValue}</div>
        </div>
    )
}
```

### useStateWithHistory

```jsx
import {useStateWithHistory} from '@perymimon/react-hooks/useStateWithHistory';

function Demo() {
    const [value, setValue, {history, pointer, back, forward, go}] = useStateWithHistory(0);

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <div>history: {history.join(',')}</div>
            <div>pointer: {pointer}</div>
            <button onClick={back}>back</button>
            <button onClick={forward}>forward</button>
            <button onClick={_ => go(2)}>go 2</button>
        </div>
    );
}
```

### useTimeout

```jsx 
import {useTimeout} from '@perymimon/react-hooks/useTimeout';

function Demo() {
    const {clear, reset} = useTimeout(() => {
        console.log('timeout');
    }, 1000);

    return (
        <div>
            <button onClick={clear}>clear</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
```

### useUpdateEffect

call callback only if it's changed, skip on the first render

```jsx
import {useUpdateEffect} from '@perymimon/react-hooks/useUpdateEffect';

function Demo() {
    const [value, setValue] = useState(0);
    useUpdateEffect(() => {
        console.log('update');
    }, [value]);

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <div>value: {value}</div>
        </div>
    );
}

```

### useEffectOnce

run callback only once, on the first render

```jsx
import {useEffectOnce} from '@perymimon/react-hooks/useEffectOnce';

function Demo() {
    useEffectOnce(() => {
        console.log('effect');
    });

    return (
        <div>
            <div>value: {value}</div>
        </div>
    );
}
```    

## debuggers

### useRenderCount

count the number of times the component is rendered

    import {useRenderCount} from '@perymimon/react-hooks/useRenderCount';
    
    function Demo() {
        const [value, setValue] = useState(0);
        const {loops, fullRender} = useRenderCount();

        return (
            <div>
                <input value={value} onChange={e => setValue(e.target.value)}/> 
                <div>functions loops: {loops}</div>
                <div>full Render: {fullRender}</div>
            </div>
        );
    }

### useDebugInfo

console log info about component

```jsx
import {useDebugInfo} from '@perymimon/react-hooks/useDebugInfo';

function Demo() {
    const [value, setValue] = useState(0);
    const {count, changedProps, lastRender, timeSinceLastRender} = useDebugInfo();

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <div>count: {count}</div>
            <div>changedProps: {changedProps.join(',')}</div>
            <div>lastRender: {lastRender}</div>
            <div>timeSinceLastRender: {timeSinceLastRender}</div>
        </div>
    );
}

```

### useOnScreen

return true if element is on screen, false otherwise

```jsx
import {useOnScreen} from '@perymimon/react-hooks/useOnScreen';

function Demo() {
    const [value, setValue] = useState(0);
    const elementRef = useRef();
    const isVisible = useOnScreen(elementRef);


    return (
        <div className="scrolable-contaniner">
            <div ref={elementRef}>
            </div>
        </div>
    )
}

```

### useScript

load script to document body from url

```jsx
import {useScript} from '@perymimon/react-hooks/useScript';

function Demo() {
    const {value, loading, error} = useScript('http://example.com/script.js')
    return (
        <div>
            {loading ? <div>loading</div> : null}
            {error ? <div>error</div> : null}
            {value ? <div>value</div> : null}
        </div>
    )
}
```

### useSize

return size of element from ResizeObserver

```jsx
import {useSize} from '@perymimon/react-hooks/useSize';

function Demo() {
    const {width, height} = useSize(elementRef);

    return (
        <div>
            <textarea ref={elementRef} resize/>
            <div>width: {width}</div>
            <div>height: {height}</div>
        </div>
    )
}

```

### useStateWithValidation

state with isValid flag

```jsx
import {useStateWithValidation} from '@perymimon/react-hooks/useStateWithValidation';

function Demo() {
    const [state, setValue, isValid] = useStateWithValidation(v => Number(v) > 5, 0);
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <div>isValid: {isValid}</div>
            <div>error: {error}</div>
        </div>
    )
}

```

### useWindowSize

return width and height of the window

```jsx
import {useWindowSize} from '@perymimon/react-hooks/useWindowSize';

function Demo() {
    const {width, height} = useWindowSize();
    return (
        <div>
            <div>width: {width}</div>
            <div>height: {height}</div>
        </div>
    )
}
```

### useLetMap

return New Map that aware to changed values

```jsx
import {useLetMap} from '@perymimon/react-hooks/useLetMap';

function Demo() {
    const [value, setValue] = useState(0);
    const map = useLetMap();
    map.set('key', value);
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <div>map: {map.get('key')}</div>
        </div>
    )
}
````

### useLetMapQueue

manage a queue for each key

```jsx
import {useLetMapQueue} from '@perymimon/react-hooks/useLetMapQueue';

function Demo() {
    const {map, push, shift, peek, peekLast, deleteKey} = useLetMapQueue('key');
    const [value, setValue] = useState(0);
    const [key, setKey] = useState(0);

    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <input value={key} onChange={e => setKey(e.target.value)}/>
            <button onClick={() => push(key, value)}>push</button>
            <button onClick={() => shift(key)}>shift</button>
            <button onClick={() => peek(key)}>peek</button>
            <button onClick={() => peekLast(key)}>peekLast</button>
            <button onClick={() => deleteKey(key)}>deleteKey</button>
            <div>map: {JSON.stringify(map)}</div>
        </div>
    )
}

```

### useRefs

create multiple refs

```jsx
import {useRefs} from '@perymimon/react-hooks/useRefs';

function Demo() {
    const [someRef, anotherRef] = useRefs();
    return (
        <div>
            <div ref={someRef}>someRef</div>
            <div ref={anotherRef}>anotherRef</div>
        </div>
    )
}
```

### useRefWithCallback

call callback when ref element in mount and unmount

```jsx 
import {useRefWithCallback} from '@perymimon/react-hooks/useRefWithCallback';

function Demo() {
    const onMouseDown = useCallback(e => console.log('hi!', e.target.clientHeight), []);

    const setDivRef = useRefWithCallback(
        node => node.addEventListener("mousedown", onMouseDown),
        node => node.removeEventListener("mousedown", onMouseDown)
    );

    return (<div ref={setDivRef}></div>)

}

```

### useStateRef

extract some values from element when it mounts

```jsx
import {useStateRef} from '@perymimon/react-hooks/useStateRef';

function Demo() {
    const [clientHeight, setRef] = useStateRef(node => (node?.clientHeight || 0));

    useEffect(() => {
        console.log(`the new clientHeight is: ${clientHeight}`);
    }, [clientHeight])

    return (
        <div ref={setRef}> .... </div>
    <div>the current height is: {clientHeight}</div>
)
}


```

### useRun

like useMemo but guarantee the collback not run on some memories free behaviour

```jsx  
 import {useRun} from '@perymimon/react-hooks/useRun';

function Demo() {

    useRun(() => {
        console.log('hi');
    }, [])

    return <div>hi</div>
}

``` 

### useArrayToMap

convert array of objects to JS Map

```jsx  
import {useArrayToMap} from '@perymimon/react-hooks/useArrayToMap';

funciton Demo(){
    
    const map = useArrayToMap([{id: 1, name: 'a'}, {id: 2, name: 'b'}], 'id');
    
    return (
        <div>
            <div>map: 1: {map.get('1')}</div>
            <div>map: 2: {map.get('2')}</div>
        </div>
    )
    
}



