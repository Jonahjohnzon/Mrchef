import React from 'react';
import { Link } from 'react-router-dom';

function FrontBody() {
  return <div className='frontbody'>
    <div className='fronttext'>
      <h2>Are you hungry?</h2>
      <h1>Dont wait!</h1>
      <h3>Let's start cooking</h3>
      <Link to="/menu"><button>Click and let's cook</button></Link>
      </div>
      <div>
     <img src="/images/foodimage.png" alt='foodimage' className='fooddisplay' draggable="false"/>
      </div>
      <div className='frontbottom-text'>
        <ul>
          <li>This is not our official page</li>
          <li><img src="/images/arrow.png"/></li>
          <li>Scroll down for popular options</li>
        </ul>
      </div>
  </div>

}

export default FrontBody;
