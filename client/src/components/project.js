import React, { Component } from "react"
import { connect } from "react-redux"

import dojopool from "../../images/dojopool.jpg"
import reactHome from "../../images/react_home.jpg"

class Project extends Component {
  render() {
    let { toggle } = this.props

    return (
      <div class={"container content-container other-"+toggle}>
        <h2 class="center margin-bottom margin-top">Personal & Group Projects</h2>
        <div class="row">
          <div class="col-xs-3">
            <a href={dojopool}><img class="project" src={dojopool} alt="dojopool-Img" /></a>
          </div>
          <div class="col-xs-8 col-xs-offset-1">
            <h4>Description</h4>
            <p>A web application that allows users to simply login and post their name and location to join or create carpools. Users can also find others' meeting location via Google Maps.</p>
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
            <p>Web application that describes my professional experience and skills, using full ReactJS on the client side and Node.js on the server side. Implements self-taught knowledge of React-Redux architecture.</p>
            <h5>Technologies Used:</h5>
            <p>JavaScript in ECMA-Script6, Node.js, Express.js, Babel, Webpack, React-Redux, Bootstrap4, AJAX, HTML5, CSS3</p>
          </div>
        </div>
        <hr />
        <div class="row margin-bottom">
          <div class="col-xs-3">
            <img class="secret-board" src="" alt="" />
          </div>
          <div class="col-xs-8 col-xs-offset-1">
            <h4>Description</h4>
            <p>Web application where users can share their posts and mark them as "like" or "unlike". Built with Test Driven Development methodology.</p>
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
