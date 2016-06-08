import React, { Component } from "react"
import { connect } from "react-redux"

import dojopool from "../../images/dojopool.jpg"
import reactHome from "../../images/react_home.jpg"

class Project extends Component {
  render() {
    let { toggle } = this.props

    return (
      <div class={"container content-container other-"+toggle}>
        <h2 class="center margin-bottom margin-top">Personal & Group Project</h2>
        <div class="row">
          <div class="col-xs-3">
            <a href={dojopool}><img class="project" src={dojopool} alt="dojopool-Img" /></a>
          </div>
          <div class="col-xs-8 col-xs-offset-1">
            <h4>Description</h4>
            <p>A web application that users are able to simply login with name and locations to posts for providing carpools and others, who are able find the users information of the carpool posts to join their carpools.</p>
            <h5>Technologies Used:</h5>
            <p>JavaScript, MongoDB, Mongoose, Node.js, Express.js, Angular, Angular-GoogleAPI, Node.js, Twitter Bootstrap, HTML5, and CSS3.</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-3">
            <a href={reactHome}><img class="project" src={reactHome} alt="reactHome-Img" /></a>
          </div>
          <div class="col-xs-8 col-xs-offset-1">
            <h4>Description</h4>
            <p>Web application with full react client side that describes my professional experience and skills. Implements self-taught knowledge of React with Redux architecture.</p>
            <h5>Technologies Used:</h5>
            <p>JavaScript in ECMA-Script6, Node.js, Express.js, Babel, Webpack, React-Redux, Bootstrap4, AJAX, HTML5, CSS3</p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-xs-3">
            <img class="secret-board" src="" alt="secret-board" />
          </div>
          <div class="col-xs-8 col-xs-offset-1">
            <h4>Description</h4>
            <p>Web application where users can write their secrets and other users can share the secrets and mark them as like or unlike. Built with Test Driven Development methodology.</p>
            <h5>Technologies Used:</h5>
            <p>Ruby on Rails, PostgreSQL, bcrypt, simple_form, capybara, rspec-rails, Bootstrap4, SASS </p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle }
}

export default connect(mapStateToProps)(Project)
