/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { OpenCloseSingUpModal as singUpActionType } from '../actions'
import InitialState from '../constants/InitialState'

function singUpModal(state = InitialState.singUpModal, action) {
  switch (action.type) {
    case singUpActionType.OPEN_CLOSE_SING_UP_MODAL:
      return (state = action.data)
    default:
      return state
  }
}

export default singUpModal
