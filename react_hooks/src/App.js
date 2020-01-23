import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import UseStateComponent from './component/usestate/UseStateComponent';
import UseEffectComponent from './component/useeffect/UseEffectComponent';
import './bootstrap.css'
import UseEffectFetchComponent from './component/useeffect/UseEffectFetchComponent';
import ContextComponent from './component/usecontext/ContextComponent';
import UseReducerComponent from './component/usereducer/UseReducerComponent';
import UseCallbackComponent from './component/usecallback/UseCallbackComponent';
import UseMemoComponent from './component/usememo/UseMemoComponent';
import UseRefComponent from './component/useref/UseRefComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <ul className="navbar-nav">
              {<li><Link className="nav-link" to="/"> Use State </Link></li>}
              {<li><Link className="nav-link" to="/useEffect"> Use Effect </Link></li>}
              {<li><Link className="nav-link" to="/useEffectFetch"> Use Effect Fetch </Link></li>}
              {<li><Link className="nav-link" to="/useContext"> Use Context </Link></li>}
              {<li><Link className="nav-link" to="/useReducer"> Use Reducer </Link></li>}
              {<li><Link className="nav-link" to="/useCallback"> Use Callback </Link></li>}
              {<li><Link className="nav-link" to="/useMemo"> Use Memo </Link></li>}
              {<li><Link className="nav-link" to="/useRef"> Use Ref </Link></li>}
            </ul>
          </nav>
        </header>
        <Switch >
          <Route path="/" exact component={UseStateComponent} />
          <Route path="/useEffect" exact component={UseEffectComponent} />
          <Route path="/useEffectFetch" exact component={UseEffectFetchComponent} />
          <Route path="/useContext" exact component={ContextComponent} />
          <Route path="/useReducer" exact component={UseReducerComponent} />
          <Route path="/useCallback" exact component={UseCallbackComponent} />
          <Route path="/useMemo" exact component={UseMemoComponent} />
          <Route path="/useRef" exact component={UseRefComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;