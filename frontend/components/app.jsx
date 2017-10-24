import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div>
      <h1>Hello Airwave</h1>
      <Route path='/login' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />

    </div>
  );
};

export default App;
