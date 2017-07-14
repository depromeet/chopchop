import React from 'react';
import NavigationContainer from '../containers/NavigationContainer/NavigationContainer'

const ChopWrapper = ({tab, children}) => (
  <div className="ChopWrapper">
    <NavigationContainer tab={tab}/> 
      {children}
  </div>
);

export default ChopWrapper;