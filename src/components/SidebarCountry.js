import React from 'react'
import AppContext from './AppContext';
import "../styles/SidebarCountry.css"

export default function SidebarCountry({country}) {
  return (
    <AppContext.Consumer>
      {(value) => {
        let name;
        name = country.name.common
        return (<div className="country-short" onClick={value.handleClick}>
          {name}
        </div>)
      }}
    </AppContext.Consumer>
  )
}
