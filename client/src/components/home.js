import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import myImg from "../../images/profile.jpg"

class Home extends Component {
  render() {
    let { toggle } = this.props

    return(
      <div class="content-container">
        <div class={"jumbotron jumbotron-fluid toggle-"+toggle}>
          <div class="container">
            <div class="row">
              <div class="col-xs-3">
                <img class="profile" src={myImg} alt="myImg" />
              </div>
              <div class="col-xs-8 col-xs-offset-1">
                <h2 class="margin-top">Hello!</h2>
                <p class="intro lead">I am a Full-Stack Web Developer with great enthusiasm for learning. I like to tell stories with lines of code and demonstrate the world with pixels.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h3 class="margin-bottom center">Skills</h3>
          <div class="row">
            <div class="col-sm-6 center">
              <h4>Languages</h4>
              <p>JavaScript, ECMA-Script6, Python, Ruby, HTML, CSS, SASS</p>
            </div>
            <div class="col-sm-6 center">
              <h4>Databases</h4>
              <p>MySQL, SQLite, MangoDB, PostgreSQL</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 center">
              <h4>Frameworks & Libraries</h4>
            <p>Node.js, Express.js, jQuery, AngularJS, ReactJS, Ruby on Rails, Django, Flask, Google-API, AJAX, lodash, Webpack, gulp, babel</p>
            </div>
            <div class="col-sm-6 center">
              <h4>Development Tools</h4>
              <p>Sublime Text, Atom, Terminal, Git/Github, Wireframe, ERD, NPM, Bower, Restful-Architecture, Object-Oriented Programming</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 center">
              <h4>Professional Mission Statement</h4>
            <p>I am committed to enjoying the adventure of learning new technologies and different cultures, working with self-motivation and encouraging others, and contributing my skills to benefit the public.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { toggle: state.toggle }
}

export default connect(mapStateToProps)(Home)
