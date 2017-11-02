import React, { Component } from 'react';
import { NavBar } from './modules';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',

  }
}

const App = ({location}) => (
    
      <NavBar path={location.pathname}/>
    
)

export default App;