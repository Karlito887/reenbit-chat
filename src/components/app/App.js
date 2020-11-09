import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from '../chat/Chat';
import Login from '../login/Login';
import { savedState } from '../../redux/reducer';
import Sidebar from '../sidebar/Sidebar';

function App() {
  const { user } = useSelector(state => ({
    user: state.user
  }))
  return (
    <div className="app">
      {
        !user && !savedState.getItem('user') ? <Login />
          : (
            <div className='app__body'>
              <BrowserRouter>
                <Sidebar />
                <Switch>
                  <Route path='/rooms/:roomId'>
                    <Chat />
                  </Route>
                  <Route path='/'>
                    <Chat />
                  </Route>
                </Switch>
              </BrowserRouter >
            </div>
          )
      }
    </div>
  );
}

export default App;
