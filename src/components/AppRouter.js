import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SecondRequest from "./SecondRequest";
import ListOfReq from "../ListOfReq";

function AppRouter() {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  return (
    <>
      {" "}
      {/* <pre>{process.env.REACT_APP_APIKEY}</pre> */}
      <Switch>
        {/* <Route exact path="/">
        <Home />
      </Route> */}

        <Route exact path="/">
          <ListOfReq />
        </Route>

        <Route exact path="/cities/:id">
          <SecondRequest />
        </Route>
      </Switch>
    </>
  );
}
export default AppRouter;
