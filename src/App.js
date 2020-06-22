import React from "react";
import Header from "./components/Header/index";
import NavBar from "./components/NavBar/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Home from "./components/Home/index";
import Showroom from "./components/Showroom/index";
import Gallery from "./components/Gallery/index";
import Financement from "./components/Financement/index";
import FormEmail from "./components/FormEmail/index";
import Impot from "./components/Impot/index";
import Qualibois from "./components/Qualibois/index";
import CheminéesBois from "./components/CheminéesBois/index";
import CheminéesGaz from "./components/CheminéesGaz/index";
import CheminéesElectriques from "./components/CheminéesElectriques/index";
import PoeleGaz from "./components/PoeleGaz/index";
import PoeleBois from "./components/PoeleBois/index";
import PoelePellets from "./components/PoelePellets/index";
import Aide from "./components/Aide/index";
import Histoire from "./components/Histoire/index";
import Savoir from "./components/Savoir/index";
import MapContainer from "./components/Map/index";
import Plan from "./components/Plan/index";
import 'react-bnb-gallery/dist/style.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/showroom" component={Showroom} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={FormEmail} />
            <Route exact path="/impot" component={Impot} />
            <Route exact path="/map" component={MapContainer} />
            <Route exact path="/plan" component={Plan} />
            <Route exact path="/financement" component={Financement} />
            <Route exact path="/CheminéesBois" component={CheminéesBois} />
            <Route exact path="/CheminéesGaz" component={CheminéesGaz} />
            <Route exact path="/Qualibois" component={Qualibois} />
            <Route exact path="/PoeleGaz" component={PoeleGaz} />
            <Route exact path="/PoeleBois" component={PoeleBois} />
            <Route exact path="/PoelePellets" component={PoelePellets} />
            <Route exact path="/CheminéesElectriques" component={CheminéesElectriques} />
            <Route exact path="/Aide" component={Aide} />
            <Route exact path="/Histoire" component={Histoire} />
            <Route exact path="/Savoir" component={Savoir} />
          </ThemeProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
