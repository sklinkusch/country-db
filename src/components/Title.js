import React from 'react'
import AppContext from './AppContext';

export default function Title() {
  return (
    <AppContext.Consumer>
      {value => (<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <input placeholder="Filter countries" onChange={value.handleChange} />
        <div style={{ width: 'calc(100% - 404px)', marginRight: '202px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContents: 'center' }}>
          <h1 style={{ width: 'fit-content', textAlign: 'center', height: '25px', fontSize: '25px', lineHeight: 1, margin: '0 auto' }}>Country Information</h1>
        </div>
      </div>)}
    </AppContext.Consumer>
  )
}
