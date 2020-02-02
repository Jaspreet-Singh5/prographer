import React from 'react';
import { BrowserRouter , NavLink } from 'react-router-dom';

import classes from './Steps.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const steps = props => (
  <Aux classes={classes.StepsContainer + ' ' + 'container'}>
    <ul className={classes.StepsList}>
      <BrowserRouter>
        <li className={classes.StepsListItem}>
          <NavLink to='/BasicDetails' activeClassName={classes.selectedStep} exact>
            <i
              className="fas fa-check"
              style={{ color: '#D4D4D4', paddingRight: '.55rem' }}></i>
            Basic details
          </NavLink>
        </li>

        <li className={classes.StepsListItem}>
          <NavLink to='/category' activeClassName={classes.selectedStep}>
            <i
              className="fas fa-check"
              style={{ color: '#D4D4D4', paddingRight: '.55rem' }}></i>
            Category
          </NavLink>
        </li>

        <li className={classes.StepsListItem}>
          <NavLink to='/upload' activeClassName={classes.selectedStep}>
            <i
              className="fas fa-check"
              style={{ color: '#D4D4D4', paddingRight: '.55rem' }}></i>
            Upload
          </NavLink>
        </li>
      </BrowserRouter>

    </ul>
  </Aux>
);

export default steps;
