import React from 'react'
import { Link } from 'react-router-dom'
import Aboutus from '../../ABOUT US/Aboutus'
const Dropdownmenu = ({show,set,drop,dropvalue}) => {
    const About=()=>{
        show(!set)
    }
    const change=()=>{
        drop(!dropvalue)
    }
  return (
      <div className='dropdown' onClick={change}>
    <div>
        <ul>
            <li>
                <Link to="/" style={{  cursor:"pointer",
  color:"white",
  textDecoration:"none"}}>
                Home
                </Link>
            </li>
            <li onClick={About} style={{ color:"white",}}>
                About Us
            </li>
            <li>
            <Link to="/menu" style={{  cursor:"pointer",
  color:"white",
  textDecoration:"none"}}>
                Menu
                </Link>
            </li>
        </ul>
   
    </div>
    </div>
  )
}

export default Dropdownmenu