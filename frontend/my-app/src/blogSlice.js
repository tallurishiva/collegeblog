import {createSlice} from "@reduxjs/toolkit";
const initialState={
    userid:"nli",
    isloading:false
}
const blogslice=createSlice({
    name:"bs",
    initialState, 
    reducers:{
        updateuid: (state,action)=>{
            state.userid=action.payload;
            //console.log(action);
        },
        removeuid:(state)=>{
            state.uid="";
        }
    }
});
export const { updateuid,removeuid } =
  blogslice.actions;
export default blogslice.reducer;