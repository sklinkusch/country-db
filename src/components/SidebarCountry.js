import React from 'react'
import AppContext from './AppContext';

export default function SidebarCountry(props) {
  return (
    <AppContext.Consumer>
      {(value) => {
        let name;
        name = props.lang === "en" ? props.country.name : props.country.translations[props.lang];
        return (<div className="country-short" onClick={value.handleClick}>
          {name}
        </div>)
      }}
    </AppContext.Consumer>
  )
}
