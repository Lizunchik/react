import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import gistsReducer from './reducers/gistsReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
    collapsed: true,
    diff: true
}) 


const rootReducer = combineReducers({
   // chats: chatsReducer,
  //  messages: messagesReducer,
    gists: gistsReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));