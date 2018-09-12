import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // displayText(thing) {
  //   thing.style.visibility = "visible";
  // }
  // componentDidMount = () => function (id) {
  //   var thing = React.findDOMNode(this.refs.retGuest);
  //  displayText(thing);
  // }


  // hideText(id) {
  //   document.getElementById(id).style.visibility = "hidden";
  // }

  // regPage() {
  //   window.location = "register.html";
  // }

  renderTitles() {
    return (
      <div>
        <hr />
        <h2>Day Pass Options</h2>
        <br />
        <p>Read our code of conduct <a href="https://www.farsetlabs.org.uk/about/rules_and_policies.html">here</a> before getting a day pass</p>
      </div>
    )
  }

  renderHeader() {
    return (
      <div>
        <img id="mainBanner" src="https://raw.githubusercontent.com/gingerzoealex/farset-membership-management/master/mockup/img/full-banner.png" alt="Green and blue logo. Farset Labs; The Belfast Hackerspace "/>
        <br />
      </div>
    )
  }

  renderReturningGuest() {
    return (
      <div id="returningGuest">
        <button type="button" onMouseOver="this.displayText('descReturning')"
          onMouseOut="hideText('descReturning')">Returning Guest</button>
        <div id="descReturning">
          <p>Eu iusto oblique deseruisse vel. Falli molestie verterem ei pri, nam sint tamquam ne, quidam senserit ei eum. Illud eloquentiam reformidans nec at. Te vel tollit accusata splendide, has nominati dissentias te, ei altera temporibus intellegebat
            usu.
      </p>
        </div>

      </div>
    )
  }

  renderFirstTime() {
    return (
      <div id="options">
        <div id="firstTime">
          <button type="button" onMouseOver="displayText('descFirstTime')" onMouseOut="hideText('descFirstTime')">First Time Guest</button>
          <div id="descFirstTime">
            <p>Quo cu expetenda posidonium mediocritatem, veri omnes tritani ne his. Erat deserunt eos cu, at facilisi vituperata scribentur duo. Usu ne quis aeterno. Copiosae sententiae voluptatibus at vix, labore essent vidisse eu has. Ut decore facilisrenderPassOptions
              suavitate per.
        </p>
          </div>
        </div>
        <hr />
      </div>
    )
  }

  renderSocial() {
    return (
      <div id="social">
        <a href="https://www.farsetlabs.org.uk/membership/index.html">
        <img src="https://raw.githubusercontent.com/gingerzoealex/farset-membership-management/master/mockup/img/farset-logo.png" id="website" alt="Click to go to Farset Lab's website."/></a>
        <a href="https://twitter.com/farsetlabs?lang=en">
        <img src="https://raw.githubusercontent.com/gingerzoealex/farset-membership-management/master/mockup/img/twitter-logo.png" id="twitter" alt="Click to go to Farset Lab's twitter"/></a>
        <a href="https://twitter.com/farsetlabs?lang=en">
        <img src="https://raw.githubusercontent.com/gingerzoealex/farset-membership-management/master/mockup/img/slack-logo.png" id="slack" alt="Click to join Farset Lab's Slack"/></a>
      </div>
    )
  }

  //render is function
  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderTitles()}
        <div id="container">
          {this.renderFirstTime()}
          {this.renderReturningGuest()}

        </div>
        {this.renderSocial()}
      </div>
    );
  }
}

export default App;
