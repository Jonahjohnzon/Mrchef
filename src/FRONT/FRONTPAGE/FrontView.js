import React from 'react';
import NavBar from "./NavBar"
import FrontBody from './FrontBody';
import "./FrontBody.css";


function FrontView() {
  const color=[{
    color:"white",
    id:1
  },
   {color:"Rgb(101, 132, 68)",
   id:2}]

  return <div className='Front'>
      <NavBar/>
      <FrontBody/>
      
  </div>;
}

export default FrontView;
