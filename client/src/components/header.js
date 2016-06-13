import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"
import * as actions from "../actions"

class Header extends Component {

  handleToggle() {
    this.props.toggleCtrl(this.props.toggle)
  }

  render() {
    let { toggle } = this.props
    let collapse = toggle ? "" : "collapsed"
    let collapseIn = toggle ? "in" : ""
    let pathname = this.props.pathname
    let homeClass = pathname === "/" ? "active" : ""
    let projectClass = pathname.match(/^\/project/) ? "active" : ""
    let contactClass = pathname.match(/^\/contact/) ? "active" : ""

    return (
      <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <button class={"pull-xs-right navbartoggler hidden-sm-up " + collapse} type="button" data-goggle="collapse" data-tagret="#nav-content" aria-expanded={toggle} onClick={this.handleToggle.bind(this)}>
          ☰
        </button>
        <Link to="/" class="navbar-brand">
          <p>Han Sol Lee</p>
          <h2>Full Stack Web Developer</h2>
        </Link>
        <div class={"navbar-toggleable-xs collapse " + collapseIn} id="nav-content" aria-expanded={toggle}>
          <ul class="nav navbar-nav pull-xs-left pull-sm-right">
            <li class={"nav-item " + homeClass}>
              <Link to="/" class="nav-link">HOME</Link>
            </li>
            <li class="nav-item">
              <a href="../../images/resume.pdf" class="nav-link">RESUME</a>
            </li>
            <li class={"nav-item " + projectClass}>
              <Link to="/project" class="nav-link">PROJECT</Link>
            </li>
            <li class={"nav-item " + contactClass}>
              <Link to="/contact" class="nav-link">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle }
}

export default connect(mapStateToProps, actions)(Header)
