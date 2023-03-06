// import {createStore} from 'redux';
// import {mainReducer} from './reducers';

// export const store = createStore(mainReducer);

import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './reducers';

export default configureStore({
  reducer: {
    cart: mainReducer,
    user: userReducer
  },
});




import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducerReg';

const rootReducer =combineReducers({userReducer,mainReducer});

export const store = createStore(rootReducer,applyMiddleware(thunk));