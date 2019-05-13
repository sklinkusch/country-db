import React from 'react';
import '../styles/App.css';
import AppContext from './AppContext';
import Title from './Title';
import AppProvider from './AppProvider';
import Sidebar from './Sidebar';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Title />
        <Sidebar />
      </div>)
    </AppProvider>
  );
}

export default App;
