import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import MainNav from "./components/layout/MainNav";
import { Container } from "react-bootstrap";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AllCompanies from "./components/pages/AllCompanies";
import AddCompany from "./components/pages/AddCompany";
import AddCustomer from "./components/pages/AddCustomer";
import { Provider } from "react-redux";
import store from "./store";
import GetComp from "./components/pages/GetComp";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainNav />
        <Container>
          <Route exact path="/" component={Landing} />
        </Container>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/companies" component={AllCompanies} />
          <Route exact path="/companies/:id" component={GetComp} />
          <Route exact path="/addcompany" component={AddCompany} />
          <Route exact path="/addcustomer" component={AddCustomer} />
        </Switch>

        <br />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
