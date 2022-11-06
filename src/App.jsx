import { useState } from 'react'
import { Header, HeaderMobile, Main, Footer, ReactLanding } from './components/index';
import * as data from './dataSet.json';
import { BrowserRouter as Router } from 'react-router-dom';

import useWindowDimensions from './hooks/hooks';

// STYLES
import './styles/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const { width } = useWindowDimensions()

  return (
    <div className="App">
      <Router>
      <Header data={data.header} />
        {/* { width > 600 ? <Header data={data.header} /> : <HeaderMobile data={data.header} />} */}
        <Main data={data.main} />
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
