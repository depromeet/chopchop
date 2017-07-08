import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RootRoute from './containers';

import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Router>
      <Container text>
        <RootRoute/>
      </Container>
    </Router>
  );
};

export default App;
