import React from 'react'
import SidebarCountry from './SidebarCountry';
import AppContext from './AppContext';
import "../styles/Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <AppContext.Consumer>
        {value => {
          {
            const sidebarArray = value.selectedCountries.map((country, index) => <SidebarCountry key={index} country={country} />)
            return (
              <React.Fragment>
                {sidebarArray}
              </React.Fragment>
            )
          }
        }
        }
      </AppContext.Consumer>
    </div>
  )
}