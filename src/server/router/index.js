
import express from 'express';
import request from 'request';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Store from '../../shared/store';
import routesConfig from '../../shared/config';
import reducers from '../../shared/reducer';

//import {changeLanguage} from './language';

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/ 

//const store = createStore(reducers, applyMiddleware(thunk));

const store =Store();

//const state = store.getState();
//console.log(state);
//store.dispatch(changeLanguage('th'));

//console.log(state);

router.get('*', (req, res) => {
  const branch = matchRoutes(routesConfig, req.url);
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data) => {
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routesConfig)}
        </StaticRouter>
      </Provider>
    );
    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    res.render('index', {title: 'Obsessed', data: store.getState(), content });
  });
});

module.exports = router;