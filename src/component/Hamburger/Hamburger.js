import React from 'react';

import classes from './Hamburger.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const hamburger = props => (
  <Aux classes={classes.HamburgerContainer}>
    <span className={classes.Line}></span>
    <span className={classes.Line}></span>
    <span className={classes.Line}></span>
  </Aux>
);

export default hamburger;
