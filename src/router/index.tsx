import * as React from 'react';

import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    component: React.lazy(() => import("../app")),
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