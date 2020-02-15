import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Homepage from './Homepage'

const routes = (
  <Switch>
    <Route exact={true} path='/' component={Homepage} />
    <Route component={NotFound} />
  </Switch>
)

export default routes
