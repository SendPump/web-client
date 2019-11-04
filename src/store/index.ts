import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import coreReducer from "./core";


export type StoreState = ReturnType<typeof coreReducer>;


export default function configureStore(initialState={}) {
 return createStore(
   coreReducer,
   initialState,
   applyMiddleware(thunk)
 );
}
