import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { component:Compoonent, ...rest } = props
  
  return (<Route {...rest} render={(renderProps) => {
    if(localStorage.getItem('token')) {
      return <Compoonent {...renderProps} />
    } else {
      return <Redirect to ='/login' />
    }
  }} />);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute
