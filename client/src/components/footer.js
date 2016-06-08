import React, { Component } from "react"
import { Link } from "react-router"

import linkedIn from "../../images/linked_in.jpg"
import gitHub from "../../images/git_hub.jpg"

class Footer extends Component {
  render() {
    return (
      <div class="container-fluid footer">
        <div class="row">
          <div class="col-md-3 center">
            <p class="bold margin-bottom-footer">Call</p>
            <p>206-409-6713</p>
          </div>
          <div class="col-md-3 center">
            <p class="bold margin-bottom-footer">Contact</p>
            <p><a href="mailto:solly0702@gmail.com">solly0702@gmail.com</a></p>
          </div>
          <div class="col-md-3 center">
            <p class="bold margin-bottom-footer">Follow me</p>
            <a href="https://github.com/solly0702" class="link"><img class="linked-in" src={linkedIn} alt="linked-In" /></a>
            <a href="https://www.linkedin.com/in/han-sol-lee-99284287" class="link"><img class="git-hub" src={gitHub} alt="git-Hub" /></a>
          </div>
          <div class="col-md-3 center">
            <p class="bold margin-bottom-footer">About this site</p>
            <p class="small">ReactJs, Bootstrap4-alpha in Front-end, Node.js in Back-end</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
