import React from 'react'
import AppContext from './AppContext';

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
