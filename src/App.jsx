import React, { useState } from 'react'
import * as data from './dataSet.json';
import { BrowserRouter as Router } from 'react-router-dom';

import useWindowDimensions from './hooks/utils';

// COMPONENTS
 import { ListOrdered, ListUnordered } from './components';

// STYLES
import './styles/App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const { width } = useWindowDimensions()

  return (
    <div className="App">
      <ListUnordered/>
    </div>
  )
}

export default App;
