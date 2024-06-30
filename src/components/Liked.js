import React from 'react'
import User from './User'
import Button from './Button'

const Liked = () => {
  return (
    <div className='sideBar-content liked'>
      <h3>You might like </h3>
      <div className='d-flex'>
      <User />
      <Button value="Follow" classN="post" />

      </div>
      <div className='d-flex'>
      <User />
      <Button value="Follow" classN="post" />

      </div><div className='d-flex'>
      <User />
      <Button value="Follow" classN="post" />

      </div>
      <p><a href='/'>  Show more</a></p>
    </div>
  )
}

export default Liked