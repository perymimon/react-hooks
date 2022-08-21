import { useRef } from 'react';

export default useLatest;

export function useLatest(value) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

