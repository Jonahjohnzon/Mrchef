import React from 'react';
import "./Aboutus.css"
function Aboutus({close}) {
  return <div className='About'>
      <div className='Aboutbox'>
              <div className='about_wordings'>
      <div><h1 className='aboutheader'>ABOUT-US</h1></div>
       <h4>Mr chef is one of the better free cooking website.
               It features a bunch of recipes, HD video guides, step-by-step photo instructions,
                and how-to videos for basic kitchen tips and tricks. It’s totally free .</h4></div>
      <div className='closeAboutUs' onClick={close}><img src='/images/No.png'/></div>
      <div className='ourContact'>
      <h2>Email us</h2>
              <form >
              <input type="email" placeholder='  Email' className='email'/><br/><br/>
              <textarea rows="4" column="40"></textarea><br/>
              <input type="submit"  value="Send" className='button' onClick={close}/>
              </form>
      </div>
      </div>
  </div>;
}

export default Aboutus;
