import React from 'react'
import Buttons from './styles'

const Button = ({children, Style}) => {
  return (
    <Buttons className={Style}>{children}</Buttons>
  )
}

export default Button