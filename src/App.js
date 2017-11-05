import React, { Component } from 'react';
import { NavBar } from './modules';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { refreshStudents } from './actions/refreshStudents';
import { refreshResource } from './actions/refreshResource';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',

  }
}

const App = ({location, store}) => (
    
      <NavBar path={location.pathname} store={store}  />   
)
refreshStudents();
refreshResource();

export default App;