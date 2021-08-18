import React from 'react'

const renderNode = (Component?: React.ReactNode) => {
  if (!Component) {
    return null
  } else if (
    React.isValidElement(Component) ||
    typeof Component !== 'function'
  ) {
    return Component
  } else {
    return <Component />
  }
}

export default renderNode
