import {
  EMAIL_SEND,
  EMAIL_SEND_ERROR
} from "../actions/types"

export default function(state={}, action) {
  switch(action.type) {
    case EMAIL_SEND:
      return({...state, message: action.data})
    case EMAIL_SEND_ERROR:
      return({...state, error: action.data})
  }
  return state
}
