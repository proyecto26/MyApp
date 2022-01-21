import { StoreState, ActionType, StoreAction } from './actions'

export const initialState: StoreState = {
  user: null,
}

export const reducer = (
  state = initialState,
  action: ActionType,
): StoreState => {
  switch (action?.type) {
    case StoreAction.ClearUser:
      return { ...state, user: null }
    case StoreAction.LoadUser: {
      const { value: user } = action
      return { ...state, user }
    }
    default:
      return state
  }
}
