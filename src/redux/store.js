import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
