import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Holder from './components/Holder/Holder';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Holder></Holder>
    </div>
  );
}

export default App;
