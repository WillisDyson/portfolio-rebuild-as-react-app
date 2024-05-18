import React from 'react';
import { Navbar } from './components';
import './App.css';
import GlobalScripts from './globals/GlobalScripts';

function App() {
  return (
    <div id="app">
      <GlobalScripts />
      <Navbar />
    </div>
  );
}

export default App;