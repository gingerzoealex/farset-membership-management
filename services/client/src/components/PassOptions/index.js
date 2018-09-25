import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from '../../pages/Registration';

const Options = () => {
  return (
    <div>


      <div id="options">
        <div id="returningGuest">

          <span class="clicky">Returning Guest</span>


          <div id="descReturning">
            <p>Eu iusto oblique deseruisse vel. Falli molestie verterem ei pri, nam sint tamquam ne, quidam senserit ei eum. Illud eloquentiam reformidans nec at. Te vel tollit accusata splendide, has nominati dissentias te, ei altera temporibus intellegebat
              usu.
          </p>
          </div>

        </div>

        <div id="options">
          <div id="firstTime">
            <a href="/Registration"><span class="clicky">First Time Guest</span></a>
            <div id="descFirstTime">
              <p>Quo cu expetenda posidonium mediocritatem, veri omnes tritani ne his. Erat deserunt eos cu, at facilisi vituperata scribentur duo. Usu ne quis aeterno. Copiosae sententiae voluptatibus at vix, labore essent vidisse eu has. Ut decore facilisrenderPassOptions
                suavitate per.
        </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
};

export default Options;

