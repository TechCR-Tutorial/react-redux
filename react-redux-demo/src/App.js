import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/Store'
import './App.css';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';
import IcecreamContainer from './component/IcecreamContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store = {store} >
    <div className="App">
      <ItemContainer cake />
      <CakeContainer />
      <HooksCakeContainer />
      <NewCakeContainer />
      <ItemContainer />
      <IcecreamContainer />
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
