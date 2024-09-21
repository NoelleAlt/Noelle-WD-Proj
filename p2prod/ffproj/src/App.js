import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import './App.css';

export default function App () {
  return (
    <Router>
      <div>
          <Route path="/" exact component={AboutMe} />
          <Route path="/faq" component={FAQ} />
      </div>
    </Router>
  );
};