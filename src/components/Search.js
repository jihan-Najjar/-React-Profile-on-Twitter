import React from 'react'
import {icons}from '../assets/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
    let icon=icons.find(icon=>(icon.name==="Explore")

    )
    console.log(icon.name)
  return (
    <label htmlFor='search' className='sideBar-content'>
            <FontAwesomeIcon
            icon={icon.icon}
            style={{ color: " #3C3C3C" }}
            className="FontAwesomeIcon"
          />
        <input id='search' type='search' value="Search"/>
        </label>
  )
}

export default Search