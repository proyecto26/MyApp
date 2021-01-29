import React from 'react'
export const withDatabaseProvider = () => {
  return (Component: React.FC) => {
    return (props: any) => {
      return <Component {...props} />
    }
  }
}
