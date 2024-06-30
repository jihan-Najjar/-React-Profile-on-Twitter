import React from 'react'
import CommunicationIcon from './communicationIcon'
import User from './User'

const MovingInProfile = () => {
  return (
    <div> 
     
<ul  className='MovingInProfile-header'>
    <li><a href='/'>Posts</a></li>
    <li><a href='/'>Replies</a></li>
    <li><a href='/'>Media</a></li>
    <li><a href='/'>Likes</a></li>

</ul>
<section className='posts'>
<section className='postss'>
{/* <img src={require("../assets/gd.png")} alt='Jihan najjar image'/> */}
<User/>
<p>  danabramov.bsky.social <span>@dan-abramov</span> </p>
{/* <Date ></Date> */}
<p> happy 10th birthday to <a>
@reactjs!
    </a></p>
</section>


     
        <CommunicationIcon/>
</section>

    </div>
  )
}

export default MovingInProfile