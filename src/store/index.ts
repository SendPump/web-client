import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import coreReducer, { initState } from "./core";


export type StoreState = ReturnType<typeof coreReducer>;


export default function configureStore(initialState=initState) {
 return createStore(
   coreReducer,
   initialState,
   applyMiddleware(thunk)
 );
}
