/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './Pages/Layout';
import './assets/main.scss';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Layout />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
