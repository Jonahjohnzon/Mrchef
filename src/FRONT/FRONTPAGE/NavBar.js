import React, { useState } from 'react';
import "./FrontBody.css"
import { Link } from 'react-router-dom';
import Aboutus from '../../ABOUT US/Aboutus';
import Dropdownmenu from './Dropdownmenu';
const linkstyle={
Linkstyleup: { textDecoration:"none",
  cursor:"pointer",
  color:"Rgb(101, 132, 68)"},
onOver:{
  cursor:"pointer",
  color:"white",
  textDecoration:"none"
  }
} 

const NavBar = () => {
  const [show,setShow]=useState(false) 
  const[drop,setDrop]=useState(false)
const showAbout=()=>{
  setShow(!show)
}
const [changecolor,setChangecolor]=useState(true)
const [changecolor1,setChangecolor1]=useState(true)

  return <div>
    <header>
      <div className='Aboutnavbar'>
      {show && <Aboutus close={showAbout}/>}
      </div>
    <div className='logo'>
        <img src="/images/chef-icon.png"  alt="chef illustration"/>
    </div>
    <ul  className='header-menu'>
        <li className='li'> <Link to="/" style={changecolor?linkstyle.Linkstyleup:linkstyle.onOver  }  onMouseEnter={()=>{setChangecolor(!changecolor)}}  onMouseLeave={setChangecolor}>Home</Link></li>
        <li className='li' > <Link to="/menu" style={changecolor1?linkstyle.Linkstyleup:linkstyle.onOver} onMouseEnter={()=>{setChangecolor1(!changecolor1)}} onMouseLeave={setChangecolor1}>Menu</Link></li>
        <li className='li' onClick={showAbout}>About</li>
    </ul>
    <div className='icon'>
      <input type="text"  placeholder='Search' name='search' id="search"/>
    </div>
    <section>
    <img src='/images/icon.png' className='menuicon' onClick={()=>setDrop(!drop)}/>
    </section>
    </header>  
    
    {drop &&  <Dropdownmenu show={show=>setShow(show)} set={show} drop={drop=>setDrop(drop) } dropvalue={drop}/>}

  </div>;
};

export default NavBar;
