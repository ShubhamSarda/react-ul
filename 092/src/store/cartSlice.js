const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action){
            console.log(action.payload);
        },
        remove(){

        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;