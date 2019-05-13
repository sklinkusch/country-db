import React from 'react'
import SidebarCountry from './SidebarCountry';
import AppContext from './AppContext';
import "../styles/Sidebar.css"

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <AppContext.Consumer>
          {value => {
            const sidebarArray = value.selectedCountries.map((country, index) => <SidebarCountry key={index} country={country} />)
            return (
              <>
                <input placeholder="Filter countries" onChange={value.handleChange} />
                {sidebarArray}
              </>
            )
          }
          }
        </AppContext.Consumer>
      </div>
    )
  }
}
