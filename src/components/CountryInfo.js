import React from 'react'
import AppContext from './AppContext';
import "../styles/CountryInfo.css";
import worldCountries from "world-countries/dist/countries.json"

export default function CountryInfo() {
  return (
    <AppContext.Consumer>
      {(value) => {
        const name = value.hasOwnProperty("currentCountry") && value.currentCountry.hasOwnProperty("name") && value.currentCountry.name.hasOwnProperty("common") ? value.currentCountry.name.common : "";
        let coord;
        if (value.currentCountry.latlng !== null && value.currentCountry.latlng !== undefined && value.currentCountry.latlng.length > 0) {
          const [lat, lng] = value.currentCountry.latlng;
          const latitude = lat > 0 ? `${lat.toFixed(2)}°N` : `${-lat.toFixed(2)}°S`;
          const longitude = lng > 0 ? `${lng.toFixed(2)}°E` : `${-lng.toFixed(2)}°W`;
          coord = `${latitude}, ${longitude}`;
        } else {
          coord = "Not specified"
        }
        return (
          <div className="country-info">
            <h2 className="titlebar">
              {name}
            </h2>
            {"region" in value.currentCountry &&
              <>
                <div className="row">
                  <div className="desc">Native names</div>
                  <div className="info">{Object.keys(value.currentCountry.name.native).map(lang => `${value.currentCountry.name.native[lang].common} (${value.currentCountry.languages[lang]})`).join(", ")}</div>
                </div>
                <div className="row">
                  <div className="desc">Alternative spellings</div>
                  <div className="info">{value.currentCountry.altSpellings.join(", ") || "None"}</div>
                </div>
                <div className="row">
                  <div className="desc">Region</div>
                  <div className="info">{value.currentCountry.region || "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Subregion</div>
                  <div className="info">{value.currentCountry.subregion || "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Area</div>
                  <div className="info">{value.currentCountry.area || "0"} square kilometres</div>
                </div>
                <div className="row">
                  <div className="desc">Capital(s)</div>
                  <div className="info">{value.currentCountry.capital != null && value.currentCountry.capital.length > 0 ? value.currentCountry.capital.join(", ") : "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Borders</div>
                  <div className="info">{value.currentCountry.borders.map(code => {
                    const [thisCountry] = worldCountries.filter(country => country.cca3 === code)
                    return thisCountry.name.common
                  }).sort((a,b) => a.localeCompare(b, "en", { sensitivity: "base"})).join(", ") || "None"}</div>
                </div>
                <div className="row">
                  <div className="desc">Currency</div>
                  <div className="info">{Object.keys(value.currentCountry.currencies).map(code => { 
                    const currencyObject = value.currentCountry.currencies[code]
                    const { name: currencyName, symbol: currencySymbol } = currencyObject
                    return `${currencyName} (${code}, ${currencySymbol})`}).join(", ") || "None"}</div>
                </div>
                <div className="row">
                  <div className="desc">Languages</div>
                  <div className="info">{Object.values(value.currentCountry.languages).join(", ") || "None"}</div>
                </div>
                <div className="row">
                  <div className="desc">Top-level domain</div>
                  <div className="info">{value.currentCountry.tld.join(", ") || "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Country codes</div>
                  <div className="info">{value.currentCountry.cca2}, {value.currentCountry.cca3}</div>
                </div>
                <div className="row">
                  <div className="desc">Geographic coordinates</div>
                  <div className="info">{coord}</div>
                </div>
                <span role="img" aria-label={value.currentCountry.cca2} style={{ fontSize: "48px"}}>{value.currentCountry.flag}</span>
              </>
            }
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
