import React, { useEffect, useState } from 'react'

import OrderItemsManage from './OrderItemsManage'
import OrderItemsTable from './OrderItemsTable'

import '../styles/orderitems.css';
import { useDispatch, useSelector } from 'react-redux';
import { initializeOrders } from '../../redux/orderSlice';

function OrderItems() {

  const [ searchText,setSearchText ] = useState('');

  const dispatch = useDispatch();

  const handleTextChange = (text) => {
    setSearchText(text);
  }

  useEffect(() => {
    const fetchOrderList = async () => {
      const data = await fetch("./orderlist.json");
      const list = await data.json();
      dispatch(initializeOrders({list}));
    } 
    fetchOrderList();
  },[])

  return (
    <div id='orderitems_cont'>
        <OrderItemsManage handleTextChange={handleTextChange} />
        <OrderItemsTable searchText={searchText} />
    </div>
  )
}

export default OrderItems;