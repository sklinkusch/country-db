import React from 'react'
import AppContext from './AppContext';

export default function SidebarCountry(props) {
  return (
    <AppContext.Consumer>
      {(value) => (<p className="country-short" onClick={value.handleClick}>
        {props.country.name}
      </p>)}
    </AppContext.Consumer>
  )
}
