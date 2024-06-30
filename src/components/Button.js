import React from 'react'

const Button = ({value,classN}) => {
  return (
  <button  className={classN}> {value}</button>
  )
}

export default Button