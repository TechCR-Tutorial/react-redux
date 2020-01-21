import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import UseStateComponent from './component/usestate/UseStateComponent';
import UseEffectComponent from './component/useeffect/UseEffectComponent';
import './bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav">
              {<li><Link className="nav-link" to="/"> Use State </Link></li>}
              {<li><Link className="nav-link" to="/useEffect"> Use Effect </Link></li>}
            </ul>
          </nav>
        </header>
        <Switch >
          <Route path="/" exact component={UseStateComponent} />
          <Route path="/useEffect" exact component={UseEffectComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;