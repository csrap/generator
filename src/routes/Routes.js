import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../pages/App';
import Pdf from '../pages/pdf';

function RoutesApp() {
  return (
    <Router>
      <Routes>


        <Route exact path="/" component={App} />
        <Route exact path="/Pdf" component={Pdf} />

      </Routes>


    </Router>


  );
}

export default RoutesApp;
