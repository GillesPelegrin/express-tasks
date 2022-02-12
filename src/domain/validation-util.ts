import {CustomError} from '../infrastructure/error/custom-error';


export function isNotNullOrUndefined(object: any, errorMessage: string): void {
    if(object === null || object === undefined) {
        throw new CustomError(errorMessage);
    }
}

