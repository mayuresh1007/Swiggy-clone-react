import { createSlice ,} from "@reduxjs/toolkit";

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
      // console.log(state.items);
      const itemIdToRemove = action.payload;
      console.log("check 1-->",itemIdToRemove)
      state.items = state.items.filter(item => item.id !== itemIdToRemove.id);
      console.log("check 2-->",action.payload);
      console.log("check 3-->",state.items);
      // state.items.splice(itemIdToRemove, 1);
      // console.log(state.items.action.payload);
      // state.items..splice(1, 2));
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