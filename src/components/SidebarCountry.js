import React from 'react'

export default function SidebarCountry(props) {
  return (
    <div className="country-short">
      {props.country.name}
    </div>
  )
}
