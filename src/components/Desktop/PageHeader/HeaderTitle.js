import React from 'react'

const HeaderTitle = ({children,slot}) => {
    const getTitlePositionClass = () => {
        if(slot === "left"){
            return "text-left col-start-1 col-end-1"
        }else if(slot === "center"){
            return "text-center col-start-2 col-end-2"
        }else if(slot === "right"){
            return "text-right col-start-3 col-end-3"
        }
    }
  return (
    <p className={`font-semibold font-serif px-3 ${getTitlePositionClass()}`}>{children}</p>
  )
}

export default HeaderTitle