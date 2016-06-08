import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import toggleReducer from "./toggle_ctrl"
import emailContentReducer from "./email_content"

const rootReducer = combineReducers({
  form,
  toggle: toggleReducer,
  content: emailContentReducer
})

export default rootReducer
