import React from 'react'
import AppContext from './AppContext';

export default function SidebarCountry(props) {
  return (
    <AppContext.Consumer>
      {(value) => (<div className="country-short" onClick={value.handleClick}>
        {props.country.name}
      </div>)}
    </AppContext.Consumer>
  )
}
