import React from 'react';
import '../styles/App.css';
import CountryInfo from './CountryInfo';
import AppProvider from './AppProvider';
import Sidebar from './Sidebar';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Sidebar />
        <CountryInfo />
      </div>
    </AppProvider>
  );
}

export default App;
