import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BreakdownPage from './pages/BreakdownPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/breakdown">
            <BreakdownPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
