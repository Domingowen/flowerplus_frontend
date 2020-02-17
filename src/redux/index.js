import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import Reducer from './reducers/index';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);
export {persistor, store};
