import React, { Component } from 'react'
import AppContext from './AppContext'

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      selectedCountries: [],
      currentCountry: {},
      languages: [{ short: "en", name: "English" }, { short: "br", name: "Brazilian Portuguese" }, { short: "hr", name: "Croatian" }, { short: "nl", name: "Dutch" }, { short: "fa", name: "Farsi" }, { short: "fr", name: "French" }, { short: "de", name: "German" }, { short: "it", name: "Italian" }, { short: "ja", name: "Japanese" }, { short: "pt", name: "Portuguese" }, { short: "es", name: "Spanish" }],
      language: "en",
      handleChange: (inputField) => {
        const inputValue = inputField.target.value;
        const selection = this.state.countries.filter(country => {
          if (inputValue !== "") {
            return country.name.toLowerCase().includes(inputValue.toLowerCase())
          } else {
            return true;
          }
        });
        this.setState({ selectedCountries: selection });
      },
      handleClick: (event) => {
        const chosenCountry = event.target.innerText;
        const countryInfo = this.state.countries.filter(country => country.name === chosenCountry);
        this.setState({ currentCountry: countryInfo[0] })
      },
      handleLang: (event) => {
        this.setState({ language: event.target.value })
      }
    }
  }
  componentDidMount() {
    const url = "https://restcountries.eu/rest/v2/all"
    fetch(url)
      .then(response => response.json())
      .then(countries => this.setState({ countries: countries, selectedCountries: countries }))
      .catch(error => console.error);
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