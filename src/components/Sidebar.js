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
            const sidebarArray = value.selectedCountries.sort((a,b) => {
              const aName = a.name.common.toLowerCase()
              const bName = b.name.common.toLowerCase()
              return aName.localeCompare(bName, 'en', { sensitivity: "base"})
            }).map((country, index) => <SidebarCountry key={index} country={country} />)
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