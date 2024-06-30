import React from 'react'
import { trend } from '../assets/trends'

const Trends = () => {
  let trends=trend.map((tren,index)=>
  {
    let direction=tren.lang.startsWith("ar")?"rtl":"ltr"
    console.log(direction)

  return  <li key={index}>
    {tren.typo==="Gaming Trending"?<p><span>  {tren.typo} </span></p>:""}
 <h3 className={direction}>{tren.name}</h3>
 <p><span> {tren.posts} </span></p>
 
     
 
   </li>
  }
 )
  return (
    <div id='trends' className='sideBar-content liked'>
   <ul>
   {trends}

   </ul>
      <p><a href='/'>  Show more</a></p>
    </div>
  )
}

export default Trends