import React from 'react'
import classes from '../button/MyBtn.module.css'

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select style={{marginBlock: '5px'}} value={value} onChange={e=> onChange(e.target.value)}
    className={classes.myBtn} name="" id="">
      <option disabled placeholder={defaultValue} value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>{option.name}</option>
      
      )}
    </select>
  )
}

export default MySelect;