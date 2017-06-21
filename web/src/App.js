import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux';
import Body from './containers';

import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Router>
      <Container text>
        <Body/>
      </Container>
    </Router>
  );
};

// export default App;
export default connect()(App);
