function asyncErrorWrapper(callback) {
    return function (req, res, next) {
        callback(req, res, next)
            .catch(next)
    }
}

export default asyncErrorWrapper;
