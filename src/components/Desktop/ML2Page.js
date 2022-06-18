import React from 'react'

const ML2Page = ({children , overflow=true}) => {
    const getOverflowClass = () => {
        return overflow ? "overflow-auto" : ""
    }
  return (
    <div className={`relative w-screen h-screen m-0 ${getOverflowClass()}`}>{children}</div>
  )
}

export default ML2Page