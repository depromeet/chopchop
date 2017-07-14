import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RootRoute from './containers';

const App = () => {
  return (
    <Router>
      <RootRoute/>
    </Router>
  );
};

export default App;
