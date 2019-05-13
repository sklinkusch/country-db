import React from 'react'
import AppContext from './AppContext';

export default function Title() {
  return (
    <AppContext.Consumer>
      {value => (<div>
        <input placeholder="Filter countries" onChange={value.handleChange} />
      </div>)}
    </AppContext.Consumer>
  )
}
