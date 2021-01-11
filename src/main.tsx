import * as React    from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes }  from "react-router-config";

import routes from './router';

ReactDOM.render(
  <BrowserRouter>
    <React.Suspense fallback={ <div>Loading...</div> }>
      { renderRoutes(routes) }
    </React.Suspense>
  </BrowserRouter>,
  document.getElementById("app")
);