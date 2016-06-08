import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import thunk from "redux-thunk"
import logger from "redux-logger"

import App from "./components/app"
import Home from "./components/home"
import Project from "./components/project"
import Contact from "./components/contact"
import ContactSent from "./components/contact_sent"
import reducers from "./reducers"

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="project" component={Project} />
        <Route path="contact" component={Contact} />
        <Route path="success" component={ContactSent} />
      </Route>
    </Router>
  </Provider>
, document.querySelector(".app"))
