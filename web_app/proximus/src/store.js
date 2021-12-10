import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/rootreducers';
import { rootSaga } from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

let store,
  // persistConfig,
  // persistor,
  // persistedReducer,
  middleware;

// persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['count'], //these reduce will not persist data
//   whitelist: ['cartReducer, privateCarRideReducer, shuttleReducer'], //these reduce will persist data
// };

  // Middleware: Redux Saga
  middleware = [sagaMiddleware];
  store = createStore(allReducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

// export {persistor};
export default store;
