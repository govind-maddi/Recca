import React from 'react'

import OrderDetails from './Ordercomp/OrderDetails'
import OrderItems from './Ordercomp/OrderItems'

import './styles/order.css'

function Order() {
  return (
    <div id='order_cont'>
        <OrderDetails/>
        <OrderItems/>
    </div>
  )
}

export default Order