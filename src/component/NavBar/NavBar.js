import React from 'react';

import classes from './NavBar.css';
import Hamburger from '../Hamburger/Hamburger';

const navbar = props => (
    <nav>
      <div className={classes.NavContainer}>

        <div className={classes.NavInnerContainer}>
          <Hamburger></Hamburger>

          <div className={classes.NavLogo}>
          </div>
        </div>

        <div className={classes.NavInnerContainer}>
          <div className={classes.NavNotification}>
            <i className={classes.NavNotificationIcon + " fas fa-bell"}></i>
          </div>

          <div className={classes.NavUser}>
          </div>
        </div>

      </div>
    </nav>
);

export default navbar;
