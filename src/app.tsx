import * as React from 'react';

import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";

import "./style/app.scss"

function App ({ route }: RouteConfigComponentProps) {
  return (
    <div className="app">
      <h1>You can customize as much as you like.</h1>

      <div className="sub-menu">
        <Link to="/">Dashboard</Link>
        <Link to="/temp">Temporary page</Link>
      </div>
      
      { renderRoutes(route.routes) }
    </div>
  )
}

export default App;