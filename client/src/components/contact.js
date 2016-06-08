import React, { Component } from "react"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import * as actions from "../actions"

class Contact extends Component {
  handleFormSubmit(formProps) {
    this.props.emailSend(formProps)
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div class="alert alert-danger">
          <p><strong>Oops!</strong>{this.props.errorMessage}</p>
        </div>
      )
    }
  }

  render() {

    const {handleSubmit, fields: { name, email, title, content }} = this.props
    let { toggle } = this.props

    return (
      <div class={"container content-container margin-top other-"+toggle}>
        <div class="row">
          <div class="col-md-12">
            <h2 class="center margin-bottom">Contact</h2>
            <p class="center">You can email me by submitting this form below, clicking email at the bottom or call me.</p>
          <p class="center bold">I appricate any words from you. Thank you</p>
          </div>
        </div>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input class="form-control" type="text" name="name" id="name"{...name} />
                {name.touched && name.error && <div class="alert alert-danger" role="alert">{name.error}</div>}
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="email" name="email" id="email" {...email} />
                {email.touched && email.error && <div class="alert alert-danger" role="alert">{email.error}</div>}
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input class="form-control" type="text" name="title" id="title" {...title} />
                {title.touched && title.error && <div class="alert alert-danger" role="alert">{title.error}</div>}
              </div>
              <div class="form-group">
                <label for="content">Content:</label>
                <textarea class="form-control" type="text" name="content" id="content" rows="8" {...content} ></textarea>
              {content.touched && content.error && <div class="alert alert-danger" role="alert">{content.error}</div>}
              </div>
              {this.renderAlert()}
              <button action="submit" class="btn btn-primary btn-lg pull-xs-right margin-bottom">Send Email to Solly</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function validate(formProps) {
  const errors={}

  if(!formProps.name) {
    errors.name = "Please enter your name"
  }
  if(!formProps.email) {
    errors.email = "Please enter your email"
  }
  if(!formProps.title) {
    errors.title = "Please write the title"
  }
  if(!formProps.content) {
    errors.content = "Please write your content"
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    toggle: state.toggle,
    errorMessage: state.content.error
  }
}

export default reduxForm({
  form: "contents",
  fields: ["name", "email", "title", "content"],
  validate
}, mapStateToProps, actions)(Contact)
