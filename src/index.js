import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
// import App from './app';
import './test/socketio_test'
import reportWebVitals from './reportWebVitals';
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import './assets/css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={Main}></Route>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
