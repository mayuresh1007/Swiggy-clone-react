
// store.js
import { configureStore ,combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartSlice from "./cartSlice";
const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  cart: cartSlice,
  
})
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";
// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

export default store;

/*
    createdstore
    -configureStore from "@reduxjs/toolkit"

    Provider my store to app
    import {Provider} from "react-redux"
    -<Provide store={ store} >

    - Slice
     - RTK -createSlice({
        name:"",
        initialState:
        reducers:{
            -actions(add,remove,clear)
            addItem:(state,action)=>{ state = action.payload }

        }
     })

     export defalut cartSlice.reducer;
     export const { addItem, removeItem, clearCart } = cartSlice.actions;

     PUT that slice in store
        - {
            reducer:{
                cart: cartSlice,
                user: userSlice,
                theme: themeSlice
            }
        }
*/
