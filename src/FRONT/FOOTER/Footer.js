import React from 'react';
import "./Footer.css"
function Footer() {
  return <div className='footers'>
      <div className='footer-size'>
      <div className='footerinfo'>
          <img src="/images/chef-icon.png" width={100} alt="chef illustration"/>
          <p>Mr chef is one of the better free cooking website.
               It features a bunch of recipes, HD video guides, step-by-step photo instructions,
                and how-to videos for basic kitchen tips and tricks. It’s totally free .
                </p>
      </div>
      <div className='footeraddress' >
          <h2>Contact</h2>
          <ul>
              <li>Phone: +234-8106908991</li>
              <li>Email: jonahjohnzon@gmail.com</li>
              <li>instagram: @Luzebox</li>
          </ul>
      </div>
      <div className='footercontact'>
       
          <div>
             <h5>Email us</h5>
              <form >
              <input type="email" placeholder='  Email'/><br/><br/>
              <textarea rows="4" column="40"></textarea><br/>
              <input type="submit"  value="Send" className='button'/>
              </form>
          </div>
      </div>
      </div>
  </div>;
}

export default Footer;
