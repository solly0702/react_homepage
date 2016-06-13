import axios from "axios"
import { browserHistory } from "react-router"
import {
  TOGGLE_CTRL,
  EMAIL_SEND,
  EMAIL_SEND_ERROR
} from "./types"

const ROOT_URL = "http://52.204.141.29"   //"http://localhost:8000"

export function toggleCtrl(collapse) {
  return {
    type: TOGGLE_CTRL,
    data: !collapse
  }
}

export function emailSend({name, email, title, content}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/contact`, {name, email, title, content})
    .then(res => {
      dispatch({type: EMAIL_SEND, data: res.data.message})
      browserHistory.push("/success")
    })
    .catch((res) => {
      dispatch(emailSendError(res.data.error))
    })
  }
}

export function emailSendError(error) {
  return {
    type: EMAIL_SEND_ERROR,
    data: error
  }
}
