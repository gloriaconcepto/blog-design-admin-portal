import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Router from "./Router/Router";
import './style/layout.scss';
function App() {
  return (
    <div className='container'>
      <Header />

      <Router />
    </div>
  );
}

export default App;
