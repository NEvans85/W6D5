import React from 'react';
import Clock from './clock';
import Weather from './weather';

const Root = () => (
  <div className="masterContainer">
    <div><Clock /></div>
    <div><Weather /></div>
  </div>
);

export default Root;
