import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderlist : [],
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        initializeOrders(state, action){

            state.orderlist = [...(Object.values(action.payload.list))];
        },
        addOrders(state, action){
            const { order } = action.payload;
            state.orderlist = [order, ...state.orderlist];
        },
        changeOrderStatus(state, action){
            const { id } = action.payload;
            const index = state.orderlist.findIndex(order => order.id === id);
            if(index != -1){
                const { status } = action.payload;
                state.orderlist[index].status = status;
            }
        } 
    },
});

export const { initializeOrders, addOrders, changeOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;