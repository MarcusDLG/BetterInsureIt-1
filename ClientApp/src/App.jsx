import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import './custom.scss'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TestMatt from './pages/TestMatt'
import TestMarcus from './pages/TestMarcus'
import TestDan from './pages/TestDan'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/testMatt" component={TestMatt} />
        <Route exact path="/testDan" component={TestDan} />
        <Route exact path="/testMarcus" component={TestMarcus} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  )
}
