import React from 'react';
import { Button } from '@material-ui/core';
import logo from "./img/jaguar_logo.png"

function App() {
  return (
    <div>
      <img src={logo} alt="jaguar logo" width="100"/>
      <Button color="primary">Hello World</Button>
    </div>
  );
}

export default App;
