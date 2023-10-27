import React from 'react'
import classes from './MyBtn.module.css'
function MyBtn({ children, ...props }) {
  return (
    <button {...props} className={classes.myBtn}>{children}</button>
  )
}

export default MyBtn