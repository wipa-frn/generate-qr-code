import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInPage from './pages/SignInPage'
import MainPage from './pages/MainPage'
import GenerateQRCodePage from './pages/GenerateQRCodePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" ><SignInPage /></Route>
          <Route path="/sign-in" ><SignInPage /></Route>
          <Route path="/generate-qr-code" ><GenerateQRCodePage /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
