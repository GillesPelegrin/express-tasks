import {CustomError} from './custom-error';
import {NextFunction, Request, Response} from 'express';

function errorHandlerMiddleware(err: TypeError | CustomError, req: Request,
                                res: Response, next: NextFunction) {
    let customError = err;

    if (!(err instanceof CustomError)) {
        customError = new CustomError('Something went wrong, please contact *** to inform about this error');
    }

    res.status((customError as CustomError).status).send(customError);
}

export default errorHandlerMiddleware;
