import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignInPage from './pages/SignInPage'
import GenerateQRCodePage from './pages/GenerateQRCodePage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './utils/history'

function App() {
  return (

    <Router history={history} forceRefresh={true}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/generate-qr-code" component={GenerateQRCodePage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
