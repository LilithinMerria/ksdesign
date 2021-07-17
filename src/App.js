import React from 'react';
import './css/index.css';
import Header from './components/Nav';
import MainSection from './components/Main';
import FooterHere from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MainSection/>
      <FooterHere/>
    </div>
  );
}

export default App;
