import { Home, Login, NotFound, Register } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export enum RoutePaths {
  BASE = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  HOME = '/home'
}

interface RouterItem {
  path: RoutePaths;
  exact: boolean;
  component: React.FC;
}

const routes: RouterItem[] = [
  {
    path: RoutePaths.BASE,
    exact: true,
    component: Home
  },
  {
    path: RoutePaths.LOGIN,
    exact: true,
    component: Login
  },
  {
    path: RoutePaths.REGISTER,
    exact: true,
    component: Register
  },
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Home
  }
];

export const RouterOutlet = () => {
  return (
    <Switch>
      {routes.map((route: RouterItem, index: number) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
      <NotFound />
    </Switch>
  );
};
