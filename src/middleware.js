const isPromise = v => v && typeof v.then === "function";

const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        action.payload.then(res => {
            action.payload = res;
            store.dispatch(action);
        }),
            error => {
                action.error = error;
                action.payload = error.response.body;
                store.dispatch(action);
            };
        return;
    }

    next(action);
};

export {promiseMiddleware};
