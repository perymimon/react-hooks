useful react hook collection
----------------------------

```jsx
 npm
install`@perymimon/react-hooks`
```

### useToggle

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

    import {useRenderCount} from '@perymimon/react-hooks/useRenderCount';
    
    function Demo() {
        const [value, setValue] = useState(0);
        const {count} = useRenderCount();

        return (
            <div>
                <input value={value} onChange={e => setValue(e.target.value)}/> 
                <div>count: {count}</div>
            </div>
        );
    }


### useDebugInfo
```jsx
    import {useDebugInfo} from '@perymimon/react-hooks/useDebugInfo';
    
    function Demo() {
        const [value, setValue] = useState(0);
        const {count, changedProps, lastRender, timeSinceLastRender } = useDebugInfo();

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