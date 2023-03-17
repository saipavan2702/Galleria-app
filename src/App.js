import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import Upload from './components/Upload';
import Grid from './components/Grid';
import Modal from './components/Modal';

function App() {
  const [handler, setHandler]=useState(null);

  return (
    <div className="App">
      <Title/>
      <Upload/>
      <Grid setHandler={setHandler} />
      { handler && (<Modal handler={handler} setHandler={setHandler}/>) }
    </div>
  );
}

export default App;
