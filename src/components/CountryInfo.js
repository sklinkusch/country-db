import React from 'react'
import AppContext from './AppContext';
import "../styles/CountryInfo.css";

export default function CountryInfo() {
  return (
    <AppContext.Consumer>
      {(value) => {
        let name;
        if (Object.keys(value.currentCountry).length !== 0) {
          if (value.language in value.currentCountry.translations) {
            name = value.currentCountry.translations[value.language]
          } else {
            name = value.currentCountry.name
          }
        }
        let coord;
        if (value.currentCountry.latlng !== null && value.currentCountry.latlng !== undefined) {
          const [lat, lng] = value.currentCountry.latlng;
          const latitude = lat > 0 ? `${lat}°N` : `${-lat}°S`;
          const longitude = lng > 0 ? `${lng}°E` : `${-lng}°W`;
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
                  <div className="desc">Native name</div>
                  <div className="info">{value.currentCountry.nativeName}</div>
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
                  <div className="info">{value.currentCountry.area || "0"} square metres</div>
                </div>
                <div className="row">
                  <div className="desc">Population</div>
                  <div className="info">{value.currentCountry.population || "No"} inhabitants</div>
                </div>
                <div className="row">
                  <div className="desc">Capital</div>
                  <div className="info">{value.currentCountry.capital || "Not specified"}</div>
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
                  <div className="info">{value.currentCountry.callingCodes.length > 0 ? value.currentCountry.callingCodes.map(code => `+${code}`).join(", ") : "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Top-level domain</div>
                  <div className="info">{value.currentCountry.topLevelDomain.join(", ") || "Not specified"}</div>
                </div>
                <div className="row">
                  <div className="desc">Country code</div>
                  <div className="info">{value.currentCountry.alpha3Code}</div>
                </div>
                <div className="row">
                  <div className="desc">Regional blocs</div>
                  <div className="info">{value.currentCountry.regionalBlocs.map(bloc => bloc.name).join(", ") || "None"}</div>
                </div>
                <div className="row">
                  <div className="desc">Geographic coordinates</div>
                  <div className="info">{coord}</div>
                </div>
                <img src={value.currentCountry.flag} alt="flag" />
              </>
            }
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}
