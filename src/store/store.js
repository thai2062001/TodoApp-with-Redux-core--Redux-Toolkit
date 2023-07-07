
import { createStore } from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();

const stote = createStore(rootReducer,composedEnhancers);

export default stote;