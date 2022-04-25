import React from 'react';
import "./menu.css"


function MenuDisplay({myprops,closeMenu}) {

  return <div className='listmenubox' >  
       <h1 className='headname'>{myprops.strMeal}</h1>
       <div className='tabletop'>
       <div  >
       <div className='newmenuimg' style={{backgroundImage:`url(${myprops.strMealThumb})`}} ></div>
     </div>
     <div className='table'>
         <table>
             <tbody>
             <tr>
                 <th>Ingredient</th>
                 <th>Measurment</th>
             </tr>
             <tr>
                 <td>{myprops.strIngredient1}</td>
                 <td>{myprops.strMeasure1}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient2}</td>
                 <td>{myprops.strMeasure2}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient3}</td>
                 <td>{myprops.strMeasure3}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient4}</td>
                 <td>{myprops.strMeasure4}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient5}</td>
                 <td>{myprops.strMeasure5}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient6}</td>
                 <td>{myprops.strMeasure6}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient7}</td>
                 <td>{myprops.strMeasure7}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient8}</td>
                 <td>{myprops.strMeasure8}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient9}</td>
                 <td>{myprops.strMeasure9}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient10}</td>
                 <td>{myprops.strMeasure10}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient11}</td>
                 <td>{myprops.strMeasure11}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient12}</td>
                 <td>{myprops.strMeasure12}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient13}</td>
                 <td>{myprops.strMeasure13}</td>
             </tr>
             <tr>
                 <td>{myprops.strIngredient14}</td>
                 <td>{myprops.strMeasure14}</td>
             </tr>
             </tbody>
         </table>

     </div>
     </div>
     <div className='recipe'>
        <h2 className='heading'>Recipe</h2>
       <div  className='recipebox'> <h4 className='instruction'>{myprops.strInstructions}</h4>
       <a href={myprops.strYoutube}  className='youtubelink'><img src='/images/youtube.png' width="50"/></a>
       <h4 className='instruction'>Click to watch video lesson</h4>
       </div>
       <input type="submit" value="Close" className="button" onClick={closeMenu}/>
     </div>
    
         </div>;
}

export default MenuDisplay;
