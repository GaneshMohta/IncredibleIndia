import { createSlice } from "@reduxjs/toolkit"
import { data } from "autoprefixer"

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        data:[]
    },
    reducers:{
        arraycart:(state,action)=>{
            const itemExists = state.data.find((item)=>item.id === action.payload.id);
            if(!itemExists){
            state.data.push({...action.payload,quantity:1})
            }
            else{
                itemExists.quantity+=1;
            }

        },

        incrementitem:(state, action)=>{
            const selecteditem = state.data.find((item)=>item.id===action.payload.id);

            if(selecteditem){
                selecteditem.quantity+=1;
            }
        },

        decrementitem:(state, action)=>{
            const selecteditem = state.data.find((item)=>item.id===action.payload.id);

            if(selecteditem && selecteditem.quantity>1){
                selecteditem.quantity-=1;
            }
            else if(selecteditem && selecteditem.quantity==1){
                state.data=state.data.filter((i)=> (i.id != action.payload.id));
            }
        },
        removeitem: (state , action)=>{
            console.log(action.payload.id);
            state.data=state.data.filter((i)=> (i.id != action.payload.id));
        }
    }
})

export default cartSlice.reducer;
export const {arraycart ,incrementitem,decrementitem,removeitem}= cartSlice.actions;
