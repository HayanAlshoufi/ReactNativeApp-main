// import {createStore} from 'redux';
// import {mainReducer} from './reducers';

// export const store = createStore(mainReducer);

import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './reducers';
import userSlice from './reducerReg'
export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice
  },
});




import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer =combineReducers({userSlice,cartSlice});

export const store = createStore(rootReducer,applyMiddleware(thunk));