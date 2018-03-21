import React, { Component } from "react";
import { Accordion, LoginForm } from "components";
import logo from "./logo.svg";
import "./App.css";

debugger;

class App extends Component {
  onLoginSuccess = () => console.log("login sucess...");
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Accordion />
        <LoginForm onLoginSuccess={this.onLoginSuccess} />
      </div>
    );
  }
}

export default App;
