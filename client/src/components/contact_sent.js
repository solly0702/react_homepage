import React, { Component } from "react"
import { connect } from "react-redux"

class ContactSent extends Component {
  render() {
    return (
      <div class="container contact-sent">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h2 class="alert alert-info center"><span class="bold">Success! </span>Your message was sent to Sol.</h2>
          </div>
        </div>
        <div class="row greeting">
          <div class="col-md-8 col-md-offset-2">
            <h4 class="center">I appreciate your comments, and I will respond as soon as possible.</h4>
            <h5 class="center margin-top">Thank you again!</h5>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contentMessage: state.content.message,
    contentError: state.content.error
  }
}


export default connect(mapStateToProps)(ContactSent);
