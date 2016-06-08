import { TOGGLE_CTRL } from "../actions/types"

export default function(state=false, action) {
  switch(action.type) {
    case TOGGLE_CTRL:
      return action.data
  }
  return state
}
