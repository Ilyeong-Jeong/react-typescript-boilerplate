import * as React from 'react';

import { RouteConfig } from 'react-router-config';

import App from '../app';

const routes: RouteConfig[] = [
  {
    component: App,
    routes   : [
      {
        path     : "/",
        exact    : true,
        component: React.lazy(() => import("../page/dashboard"))
      },
      {
        path     : "/temp",
        component: React.lazy(() => import("../page/temp-page"))
      }
    ]
  }
]

export default routes;