import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Aboutus from '../../ABOUT US/Aboutus';
function SideMenu({className}) {
    const [showAboutUs,setShowAboutUs]=useState(false)
const linkstyle={
    textDecoration:"none",
    color:"rgb(33 49 64)"
}  
const Aboutusclick=()=>{
    setShowAboutUs(!showAboutUs)
}


  return(
  
                
                <div className={className}>
                    <div className='sidemenu-head'>
                    <img src="/images/chef-icon.png" width={100}  alt="chef illustration"/>
                    <h3>Mr Chef</h3>
                    <h6>Since 1999</h6>
                    </div>
                    <ul className='sidemenu-body'>
                    <Link to="/" style={linkstyle}> <li>Home</li></Link>
                    <li onClick={Aboutusclick} >About Us</li>
                    <Link to="/menu" style={linkstyle}><li>Menu</li></Link>                      
                    </ul>
                    <div className='sidemenu-footer'>
                        <h3>Also Check</h3>
                        <h2><Link to='/'>Le Muse cuisine</Link></h2>
                        <h6>To order delicious delicacies</h6>
                    </div>
                  
                  { showAboutUs&& <Aboutus close={Aboutusclick}/>}
                </div>
        
      )}


export default SideMenu;
