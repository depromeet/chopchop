import React from 'react';
import Navigation from './Navigation/Navigation'

const ChopWrapper = ({ children }) => (
  <div className="ChopWrapper">
    <Navigation /> {children}
  </div>
);

export default ChopWrapper;