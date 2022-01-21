/* eslint-disable no-shadow */
import { Reducer, Dispatch } from 'react'

export enum StoreAction {
  ClearUser,
  LoadUser,
}

export type StoreState = {
  user?: any
}

export type ActionType =
  | { type: StoreAction.ClearUser }
  | { type: StoreAction.LoadUser; value: any }

export type StoreReducer = Reducer<StoreState, ActionType>
export type StoreDispatch = Dispatch<ActionType>
