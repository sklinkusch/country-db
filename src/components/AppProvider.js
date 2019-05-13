import React, { Component } from 'react'
import AppContext from './AppContext'

export default class AppProvider extends Component {
  render() {
    return (
      <AppContext.Provider>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}