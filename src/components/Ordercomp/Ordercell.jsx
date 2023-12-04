import React from 'react'

import '../styles/orderitemstable.css';
import { useDispatch } from 'react-redux';
import { changeOrderStatus } from '../../redux/orderSlice';

import '../styles/ordercell.css'

function Ordercell( { orderinfo,handleDialog } ) {

    const dispatch = useDispatch();

    const handleApprove = () => {
        const obj = {
            "status":"Approved",
            "id":orderinfo.id,
        }
        dispatch(changeOrderStatus(obj))
    }

    const handleMissing = () => {
        


        /* const obj = {
            "status":"Missing",
            "id":orderinfo.id,
        }
        dispatch(changeOrderStatus(obj)); */
    }


  return (
    <>
        <td>{orderinfo.name}</td>
                <td>{orderinfo.brand}</td>
                <td>{orderinfo.price} / 6+1LB</td>
                <td>{orderinfo.qty} x 6 = 1LB</td>
                <td>0</td>
                <td>{orderinfo.status}</td>
                <td className='orderitem_btns_cont'>
                    <figure onClick={handleApprove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path></svg>
                    </figure>
                    <figure onClick={() => handleDialog(orderinfo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                    </figure>
                    <figure>
                        Edit
                    </figure>
                </td>
    </>
  )
}

export default Ordercell;