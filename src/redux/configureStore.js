import { applyMiddleware, combineReducers, createStore } from 'redux';
import { chatsReducer } from './reducers/chatsReducer/chatsReducer';
import { messagesReducer } from './reducers/messagesReducer/messagesReducer';
import { createLogger } from 'redux-logger/src';

const logger = createLogger({
    collapsed: true,
    diff: true
}) 

const loggerOld = store => next => action => {
    console.log('dispatching', action);
    console.log('before', store.getState());

    let result = next(action);
    console.log('after', store.getState());

    return result;
}

const time = store => next => action => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action);
    }

    const timeOut = setTimeout(() => next(action), delay);

    return () => {
        console.log('deleting...');
        clearTimeout(timeOut);
    }
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger, time));