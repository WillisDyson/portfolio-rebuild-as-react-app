import React, { createContext } from 'react';
import GlobalScripts from './globals/GlobalScripts';
import { Navbar, HeroSlice, SkillsSlice, CertifsSlice, CareersSlice } from './components';
import './App.css';

const ImgLocationContext = createContext();


function App() {
  return (
    <div id="app">
      <ImgLocationContext.Provider value="images/">
        <Navbar />
        <HeroSlice />
        <SkillsSlice />
        <CertifsSlice />
        <CareersSlice />
      </ImgLocationContext.Provider>
      <GlobalScripts />
    </div>
  );
}

export default App;
export { ImgLocationContext };