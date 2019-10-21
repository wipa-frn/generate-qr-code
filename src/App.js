import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SignInPage from './pages/SignInPage'
// import MainPage from './pages/MainPage'
import GenerateQRCodePage from './pages/GenerateQRCodePage'

function App() {
  return (
    <div className="App">
      {/* <SignInPage /> */}
      <GenerateQRCodePage />
    </div>
  );
}

export default App;
