import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

//route layout
export const RouteLayout = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )