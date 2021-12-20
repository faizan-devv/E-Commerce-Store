import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import EndPoints from "./FakeApi";
import Router from "./Routes";
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
