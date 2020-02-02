import React, { Component } from 'react';

import Aux from './hoc/Auxiliary/Auxiliary';
import NavBar from './component/NavBar/NavBar';
import Progress from './container/Progress/Progress';
import Steps from './component/Steps/Steps';
import BasicDetails from './container/BasicDetails/BasicDetails';

class App extends Component {
  render() {
    return (
      <Aux classes='container'>
        <NavBar></NavBar>
        <Progress></Progress>
        <Steps></Steps>
        <BasicDetails></BasicDetails>
      </Aux>
    );
  }
}

export default App;
