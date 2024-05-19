import React, { createContext } from 'react';
import GlobalScripts from './globals/GlobalScripts';
import { Navbar, HeroSlice, SkillsSlice } from './components';
import './App.css';

const ImgLocationContext = createContext();


function App() {
  return (
    <div id="app">
      <GlobalScripts />
      <ImgLocationContext.Provider value="images/">
        <Navbar />
        <HeroSlice />
        <SkillsSlice />
      </ImgLocationContext.Provider>

    </div>
  );
}

export default App;
export { ImgLocationContext };