// init jest test environment for testing hooks
import {renderHook, act} from '@testing-library/react-hooks'

import { useCssClass } from './useCssClass';

fdescribe('useCssClass', () => {
    fit('should return correct string', () => {
        const classObject = {
            foo: true,
            bar: false,
            baz: true,
        };
        const {result} = renderHook (_=> useCssClass(classObject) );
        expect(result.current).toBe('foo baz');

    });
})