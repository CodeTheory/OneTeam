import React, { ReactElement } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface IPrivateRouteProps extends RouteProps {
  children: ReactElement;
  auth?: boolean;
}

const PrivateRoute = ({
  children,
  auth = false,
  ...routeProps
}: IPrivateRouteProps) => {
  return (
    <Route {...routeProps}> {auth ? children : <Redirect to="/" />} </Route>
  );
};

export default PrivateRoute;
