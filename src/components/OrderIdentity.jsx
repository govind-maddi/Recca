import React from 'react'

import './styles/orderidentity.css';

function OrderIdentity() {
  return (
    <div id='orderidentity_cont'>
        <div id='orderidentity_items_cont'>
        <div id='orderitem1'>
          <section>
              <article>Orders</article>
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
              </figure>
              <article>Order 32457ABC</article>
          </section>

          <section>
              <header id='orderidentityheader'>Order 32457ABC</header>
          </section>
        </div>

        <div id='orderitem2'>
            <section>
                <button id='orderback'>Back</button>
                <button id='orderapprove'>Approve Order</button>
            </section>
        </div>
        </div>
    </div>
  )
}

export default OrderIdentity