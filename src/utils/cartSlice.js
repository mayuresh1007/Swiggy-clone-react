import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop();
      state.items.pop(action.payload);
      //improve logic which is remove by indexing the items
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export actions in redux
export default cartSlice.reducer;
// method the export main reducer not reduces
// this combines all reduces a one

/**
 *  reducers: {
 * //action - additem --> this reducer function ()=>{} 
    addItem: (state, action) => {
      state.items.push(action.payload);
    },-- reducer function
    
 */