/*
 * Store
*/
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/*
 * Import root reducer
*/
import rootReducer from './modules/rootReducer';

export default function configureStore() {
 return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}