import React, { useContext, useEffect, useState } from 'react'

import '../styles/orderitemstable.css';
import Ordercell from './Ordercell';
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from '../../Layout';
import { changeOrderStatus } from '../../redux/orderSlice';



function OrderItemsTable( { searchText } ) {

    const [ filterorderitemlist,setFilterOrderItemList ] = useState([]);
    const [ id,setId ] = useState(0);

    const [ dialog,setDialog ] = useState(false);
    const setBgTheme = useContext(Theme);

    let orderitemlist = useSelector((state) => state.order.orderlist);

    const dispatch = useDispatch();
    
    const handleDialog = (id) => {
        setDialog((prevDialog) => !prevDialog);
        setId(id);
    }

    const handleMissing = () => {
        const objmissing = {
            "status":"Missing",
            "id":id,
        }
        dispatch(changeOrderStatus(objmissing))
        setDialog(false);
    };

    const handleMissingUrgent = () => {
        const objurgent = {
            "status":"Missing Urgent",
            "id":id,
        }
        dispatch(changeOrderStatus(objurgent))
        setDialog(false);
    };

    useEffect(() => {
        if(dialog)
            setBgTheme(true);
        else
            setBgTheme(false);
    },[dialog])

    useEffect(() => {
        if(searchText === '')
            setFilterOrderItemList(orderitemlist)
        else
        {
            let temp = [...filterorderitemlist];
            temp = temp.filter((order) => {
                return (order.name).includes(searchText);
            })
            setFilterOrderItemList(temp);
        }
    },[searchText]);

    useEffect(() => {
        setFilterOrderItemList(orderitemlist);
    },[orderitemlist]);

  return (
    <div id='orderitems_table_cont'>
        <table id='orderitems_table'>
            <tr id='tablehdr'>
                <th id='productheader'>Product</th>
                <th id='brandheader'>Brand</th>
                <th id='priceheader'>Price</th>
                <th id='quantityheader'>Quantity</th>
                <th id='totalheader'>Total</th>
                <th id='statusheader'>Status</th>
                <th id='btnsheader'></th>
            </tr>

            {
                filterorderitemlist.length > 0 && filterorderitemlist.map((order,index) => {
                    return <tr id={index}><Ordercell orderinfo={order} handleDialog={handleDialog}/></tr>
                })
            }
        </table>
        {
            dialog && <div id='missing_dialog_cont'>
                            <header id='missing_hdr'>Missing Product</header>
                            <header id='missing_msg'>Is 'Chicken-Breats-Filled--urgent'</header>
                            <section id='missing_btns'>
                                <button id='nobtn' onClick={handleMissing} >No</button>
                                <button id='yesbtn' onClick={handleMissingUrgent}>Yes</button>
                            </section>
                        </div>
        }
    </div>
  )
}

export default OrderItemsTable