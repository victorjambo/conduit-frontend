import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Settings from '../Pages/Settings';
import CreateArticle from '../Pages/CreateArticle';
import Article from '../Pages/Article';
import Ted from '../Pages/Ted';

import ROUTES from './appRoutes';

export default () => (
  <Switch>
    <Route path={ROUTES.DEFAULT} exact component={Home} />
    <Route path={ROUTES.LOGIN} exact component={Login} />
    <Route path={ROUTES.REGISTER} exact component={Register} />
    <Route path={ROUTES.PROFILE} exact component={Profile} />
    <Route path={ROUTES.SETTINGS} exact component={Settings} />
    <Route path={ROUTES.ARTICLE} exact component={Article} />
    <Route path={ROUTES.CREATE_ARTICLE} exact component={CreateArticle} />
    <Route path={ROUTES.TED} exact component={Ted} />
  </Switch>
);
