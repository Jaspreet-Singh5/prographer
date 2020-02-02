import React, { Component } from 'react';

import classes from './Progress.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Progress extends Component {
  render() {
    return (
      <Aux classes={ classes.ProgressContainer + ' container' }>

        <div className={classes.ProgressContainerStats}>

          <div className={classes.ProgressContainerStatsMainInfo}>
            You are going well
          </div>

          <div className={classes.ProgressContainerStatsSubInfo}>
            <span>Profile Completeness: 15%</span>
            <span>We want to know more about your self.</span>
          </div>
        </div>

        <div className={classes.ProgressContainerDisplay}>
        
          15%
        </div>
      </Aux>
    );
  }
}

export default Progress;
