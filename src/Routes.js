import React from "react";
import { Route, Switch } from "react-router-dom";
import contactPage from "./pages/contactPage";

// FREE
import DesignPage from "./pages/DesignPage";
import MarketingPage from "./pages/MarketingPage";
import WebPage from "./pages/WebPage";
import HomePage from "./pages/HomePage";



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={contactPage} />
        
        


        {/* FREE */}
        <Route exact path="/services/design" component={DesignPage} />
        <Route exact path="/services/marketing" component={MarketingPage} />
        <Route exact path="/services/web" component={WebPage} />
        
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
