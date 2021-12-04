import React, { Component } from 'react'
import AppContext from './AppContext'
import countryList from "world-countries/dist/countries.json"

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: countryList,
      selectedCountries: countryList,
      currentCountry: {},
      handleChange: (inputField) => {
        const inputValue = inputField.target.value;
        const selection = this.state.countries.filter(country => {
          if (inputValue !== "" && inputValue !== null) {
              return country.name.toLowerCase().includes(inputValue.toLowerCase())
          } else {
            return true;
          }
        });
        this.setState({ selectedCountries: selection });
      },
      handleClick: (event) => {
        const chosenCountry = event.target.innerText;
        const countryInfo = this.state.countries.filter(country => country.name.common === chosenCountry);
        this.setState({ currentCountry: countryInfo[0] })
      },
    }
  }
  render() {
    // console.log(this.state.countries)
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider >
    )
  }
}