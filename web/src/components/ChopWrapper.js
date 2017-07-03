import React from 'react';
import Navigation from './Navigation/Navigation'

const ChopWrapper = ({tab, children}) => (
  <div className="ChopWrapper">
    <Navigation tab={tab}/> 
      {children}
  </div>
);

export default ChopWrapper;