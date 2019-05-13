import React from 'react'
import AppContext from './AppContext';
import "../styles/CountryInfo.css";

export default function CountryInfo() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className="country-info">
          <h2 className="titlebar">
            {value.currentCountry.name}
          </h2>
          {"region" in value.currentCountry &&
            <>
              <div className="row">
                <div className="desc">Region</div>
                <div className="info">{value.currentCountry.region}</div>
              </div>
              <div className="row">
                <div className="desc">Subregion</div>
                <div className="info">{value.currentCountry.subregion || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Area</div>
                <div className="info">{value.currentCountry.area || "0"} square metres</div>
              </div>
              <div className="row">
                <div className="desc">Population</div>
                <div className="info">{value.currentCountry.population || "0"} inhabitants</div>
              </div>
              <div className="row">
                <div className="desc">Capital</div>
                <div className="info">{value.currentCountry.capital || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Borders</div>
                <div className="info">{value.currentCountry.borders.join(", ") || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Currency</div>
                <div className="info">{value.currentCountry.currencies.map(currency => { return `${currency.name}${currency.symbol ? ` (${currency.symbol})` : ""}` }).join(",") || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Languages</div>
                <div className="info">{value.currentCountry.languages.map(lang => lang.name).join(", ") || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Timezones</div>
                <div className="info">{value.currentCountry.timezones.join(", ") || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Calling Codes</div>
                <div className="info">{value.currentCountry.callingCodes.map(code => `+${code}`).join(", ") || "None"}</div>
              </div>
              <div className="row">
                <div className="desc">Top-level domain</div>
                <div className="info">{value.currentCountry.topLevelDomain.join(", ") || "None"}</div>
              </div>
            </>
          }
        </div>
      )}
    </AppContext.Consumer>
  )
}
