// import {SET_USER_NAME,SET_PASSWORD} from './action';
// const initialState = {
//     name:'',
//     pass:'',
// }

// function userReducer(state = initialState,action){
//     switch(action.type){
//         case SET_USER_NAME:
//             return{...state,name:action.payload};
//         case SET_PASSWORD:
//             return{...state,pass:action.payload};
//         default:
//             return state;
//     }
// } 

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{ 
            name:'',
            pass:'',
            email:'',
            rePass:'',
            uName:'',
            uPass:'',

    },
    reducers:  {
        setName : (state,action) => {  return{...state,name:action.payload}},
        setPass : (state,action) => {  return{...state,pass:action.payload}},

        setUserName : (state,action) => {  return{...state,uName:action.payload}},
        setUserPass : (state,action) => {  return{...state,uPass:action.payload}},
        setEmail : (state,action) => {  return{...state,email:action.payload}},
        setRePass : (state,action) => {  return{...state,rePass:action.payload}},

    }
    
}); 

export const {setName,setPass,setEmail,setRePass,setUserName,setUserPass} = userSlice.actions;

export default userSlice.reducer;



