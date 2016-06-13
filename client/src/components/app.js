import React, { Component } from "react"

import Header from "./header"
import Footer from "./footer"

class App extends Component {
  render() {
    let { pathname } = this.props.location
    return (
      <div>
        <Header pathname={pathname}/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App
