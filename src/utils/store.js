import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

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
