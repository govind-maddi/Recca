import React, { createContext, useState } from 'react'

import Header from './components/Header'
import OrderIdentity from './components/OrderIdentity'
import Order from './components/Order'

export const Theme = createContext();

function Layout() {

  const [ bgtheme,setBgTheme ] = useState(false);

  return (
    <div id='main_cont' style={{ backgroundColor: bgtheme && 'rgba(0, 0, 0, 0.4)' }}>
      <Theme.Provider value={setBgTheme}>
        <Header/>
        <OrderIdentity/>
        <Order/>
      </Theme.Provider>
    </div>
  )
}

export default Layout