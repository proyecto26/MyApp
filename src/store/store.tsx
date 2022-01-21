import React, { useReducer, createContext } from 'react'

import { StoreReducer, StoreState, StoreDispatch } from './actions'
import { initialState, reducer } from './reducer'

export type ContextProps = [StoreState, StoreDispatch]

export const StoreContext = createContext<ContextProps>([
  initialState,
  () => null,
])
export const StoreConsumer = StoreContext.Consumer

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<StoreReducer>(reducer, initialState)
  const value = React.useMemo<ContextProps>(
    () => [state, dispatch],
    [state, dispatch],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  return React.useContext(StoreContext)
}
