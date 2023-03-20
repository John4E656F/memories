import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
