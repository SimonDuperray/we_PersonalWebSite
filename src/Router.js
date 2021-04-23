import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";

export default function Router() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
               <Main />
            </Route>
            <Route path="/dashboard">
               <Dashboard />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}