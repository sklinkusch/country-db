import React from 'react'
import AppContext from './AppContext';

export default function Select() {
  return (
    <AppContext.Consumer>
      {value => {
        return (<div className="selectcontainer">
          <select onChange={value.handleLang}>
            {value.languages.map(lang => <option value={lang.short}>{lang.name}</option>)}
          </select>
        </div>)
      }
      }
    </AppContext.Consumer>

  )
}
