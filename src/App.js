import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInPage from './pages/SignInPage'
import MainPage from './pages/MainPage'
import GenerateQRCodePage from './pages/GenerateQRCodePage'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import history from './utils/history'

function App() {
  return (

    <Router history={history} forceRefresh={true}>
      <div className="App">
        <Switch>
          {/* <Redirect to="/generate-qr-code" /> */}
          <Route exact path="/" component={SignInPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/generate-qr-code" component={GenerateQRCodePage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
