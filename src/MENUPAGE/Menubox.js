import React from 'react';
import "./menu.css"

function Menubox({Name,Area,img,Totaldata}) {
 
  return  <div  className='menubox'>
    <div>
       <h1 className='menuName'>{Name}</h1>
      <div className='menuimg' style={{backgroundImage:`url(${img})`}} ></div>
      <h3 className='menuArea'>{Area}</h3>
      </div>
      <div>
        <h1 className='menuName'>Ingredient</h1>
        <ul>
          <li><h5>{Totaldata.strIngredient1}</h5></li>
          <li><h5>{Totaldata.strIngredient2}</h5></li>
          <li><h5>{Totaldata.strIngredient3}</h5></li>
          <li><h5>{Totaldata.strIngredient4}</h5></li>
          <li><h5>{Totaldata.strIngredient5}</h5></li>
          <li><h5>{Totaldata.strIngredient6}</h5></li>
          <li><h5>{Totaldata.strIngredient7}</h5></li>
          <li><h5>{Totaldata.strIngredient8}</h5></li>
          <li><h5>{Totaldata.strIngredient9}</h5></li>
          <li><h5>{Totaldata.strIngredient10}</h5></li>
          <li><h5>{Totaldata.strIngredient11}</h5></li>
          <li><h5>{Totaldata.strIngredient12}</h5></li>
          <li><h5>{Totaldata.strIngredient13}</h5></li>
          <li><h5>{Totaldata.strIngredient14}</h5></li>
          <li><h5>{Totaldata.strIngredient15}</h5></li>
        </ul>
      </div>
  </div>;
}

export default Menubox;
