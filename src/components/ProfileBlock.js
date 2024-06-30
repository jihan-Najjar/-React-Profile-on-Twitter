import React from 'react'
import ProfileImg from '../components/ProfileImg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icons } from '../assets/Icon';

const ProfileBlock = () => {

    let leftArrow = icons.find((icon) => icon.name === "leftArrow");
    let leftArrowIcon = (
      <FontAwesomeIcon icon={leftArrow.icon} size='xl' />
    );
    return (
      <div id='profileBlock'>
     
  
  <div className='d-flex1'> 
  {leftArrowIcon} 
  
      <div>
      <h1> React</h1>
  <h6>2.611 posts</h6>
      </div>
      
  
  </div>
  <ProfileImg/>
   
      </div>
    )
  }
  

export default ProfileBlock