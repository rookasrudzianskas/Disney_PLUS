import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Movies />
    </div>
  );
}

export default App;
