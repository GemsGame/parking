import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-notifications-component/dist/theme.css'
import Main from './containers/Main/Main';
import Search from './containers/Search';
import ReactNotification from 'react-notifications-component';
import './style.scss';
import 'animate.css';

function App() {
  return (
    <Provider store={store}>
      <ReactNotification/>
      <Search/>
      <Main/>
    </Provider>
  );
}

export default App;
