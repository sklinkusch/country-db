import React from 'react';
import '../styles/App.css';
import CountryInfo from './CountryInfo';
import AppProvider from './AppProvider';
import Sidebar from './Sidebar';
import Title from './Title';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>
          <Title />
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
