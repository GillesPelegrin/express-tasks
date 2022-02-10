import {isNotNullOrUndefined} from '../../../src/domain/validation-util';

test('isNotNullOrUndefined', () => {
    const ERROR_MESSAGE = 'error message';

    expect(() => isNotNullOrUndefined(null, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE);
    expect(() => isNotNullOrUndefined(undefined, ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE);
})
