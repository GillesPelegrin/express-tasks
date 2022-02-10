

function isNotNullOrUndefined(object: any, errorMessage: string): void {
    if(object === null || object === undefined) {
        throw new Error(errorMessage);
    }

}
