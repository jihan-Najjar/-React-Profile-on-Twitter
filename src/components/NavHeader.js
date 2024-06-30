import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { icons } from '../assets/Icon';
import Button from './Button';

const NavHeader = () => {
    const icon = icons.map((icon, index) => (
        <li key={index}>
          <FontAwesomeIcon
            icon={icon.icon}
            style={{ color: "#e7e9ea" }}
            className="FontAwesomeIcon"
          />
    
          {icon.name}
        </li>
      ));
  return (
  <div className='navHeader' >
      <ul>
        <li>
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: "#e7e9ea" }}
            size="2xl"
          />
        </li>
        {icon}
      </ul>
      <Button value="Post" classN="post" />
  </div>

  )
}

export default NavHeader