
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./Components/Principal/Inicio";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer"
import Whatsapp from "./Components/Common/Whatsapp";
import Contacto from "./Components/Contacto"
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/contacto">
          <Contacto></Contacto>
        </Route>
      </Switch>
      <Whatsapp></Whatsapp>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
