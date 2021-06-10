import React from 'react';
import { Route } from "react-router-dom"
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components';
import Resume from "./components/Resume"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MediaCard from './components/Cerif';

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/home" component={Home}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/portfolio"component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    
    </>
  );
}

export default App;
