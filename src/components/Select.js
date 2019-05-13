import React from 'react'
import AppContext from './AppContext';

export default function Select() {
  return (
    <AppContext.Consumer>
      {value => {
        return (<div className="selectcontainer">
          <select onChange={value.handleLang}>
            <option value="en">English</option>
            <option value="br">Brazilian Portuguese</option>
            <option value="hr">Croatian</option>
            <option value="nl">Dutch</option>
            <option value="fa">Farsi</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </div>)
      }
      }
    </AppContext.Consumer>

  )
}
