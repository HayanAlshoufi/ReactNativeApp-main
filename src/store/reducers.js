// import {ADDITION,SUBTRACTION} from './actionType';

// const initialState={
//     counter:0,
// };

// export const mainReducer = (state = initialState,action) =>{
//     switch(action.type){
//         case ADDITION:
//             return{...state,counter:state.counter +1};
    
//         case SUBTRACTION:
//             return{...state,counter:state.counter -1};
    
//         default:
//             return state;
//         }
// };


import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;

            }else{
                state.cart.push({...action.payload,quantity:1})
            }
            
        },
        removeFromCart : (state,action) => {
            const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeFromCart;
        },
        incrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            itemInCart.quantity++;
        },
        decrementQuantity : (state,action) => {
            const itemInCart = state.cart.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeFromCart;
            }else{
                itemInCart.quantity--;
            }

        },
   
    }
});


export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;



