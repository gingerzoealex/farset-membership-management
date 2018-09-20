import React, { Component } from 'react';
import './App.css';
import Registration from './pages/Registration';
import Header from './components/header';
import Options from './components/PassOptions';
import Social from './components/social';
import Title from './components/Title';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from './pages/Registration';

class App extends Component {

  //render is a function
  render() {
    return (
      <div>

        <Header />

        <Title />

        <Options />

        <Social />

        <Router>
          <Switch>
            <Route exact path="./pages/Registration/index.js" component={Registration} />
            <Route exact path="/" />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
