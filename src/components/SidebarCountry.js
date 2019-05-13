import React from 'react'

export default function SidebarCountry(props) {
  return (
    <p className="country-short">
      {props.country.name}
    </p>
  )
}
