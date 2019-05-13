import React from 'react';
import '../styles/App.css';
import CountryInfo from './CountryInfo';
import AppProvider from './AppProvider';
import Sidebar from './Sidebar';
import Title from './Title';
import Select from './Select';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <Title />
          <Select />
        </header>
        <main>
          <Sidebar />
          <CountryInfo />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
