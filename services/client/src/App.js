import React, { Component } from 'react';
import './App.css';
import Registration from './pages/Registration';
import Header from './components/header';
import Options from './components/PassOptions';
import Social from './components/social';
import Title from './components/Title';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//create a function to render componants.
//inmport componensta if you need them
<<<<<<< HEAD
const LandingPage = () => {
=======
const PageILike = () => {
>>>>>>> 92a0d7d4950b6eeb5e5d1966ec7416d59658f64e
  return (
    <div>
      <Title />
      <Options />
    </div>
  );
};

class App extends Component {

  //render is a function
  render() {
    return (
      <div>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/Registration" component={Registration} />
<<<<<<< HEAD
            <Route exact path="/" component={LandingPage} />
=======
            <Route exact path="/" component={PageILike} />
>>>>>>> 92a0d7d4950b6eeb5e5d1966ec7416d59658f64e
          {/* use the function as a component. It will render when the path is visited. */}
          </Switch>
        </Router>
        <Social />
      </div>
    );
  }
}

export default App;
