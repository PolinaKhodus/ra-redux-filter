import { createStore, combineReducers } from 'redux';

import serviceAddReducer from '../reducers/serviceAddReducer';
import serviceListReducer from '../reducers/serviceListReducer';

const reducer = combineReducers({
  serviceAdd: serviceAddReducer,
  serviceList: serviceListReducer,
});

const store = createStore(reducer);

export default store;
