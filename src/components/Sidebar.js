import React from 'react'
import SidebarCountry from './SidebarCountry';
import AppContext from './AppContext';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AppContext.Consumer>
        {value => {
          return value.map((country, index) => <SidebarCountry key={index} country={country} />)
        }}
      </AppContext.Consumer>
    </div>
  )
}
