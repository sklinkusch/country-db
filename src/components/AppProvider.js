import React, { Component } from 'react'
import AppContext from './AppContext'

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all"
    fetch(url)
      .then(response => response.json())
      .then(countries => this.setState({ countries }))
      .catch(error => console.error);
  }
  render() {
    console.log(this.state.countries)
    return (
      <AppContext.Provider value={this.state.countries}>
        {this.props.children}
      </AppContext.Provider >
    )
  }
}