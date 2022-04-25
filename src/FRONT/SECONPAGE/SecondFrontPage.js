import React from 'react';
import{useState,useEffect} from "react"
import SecondPage from './SecondPage';
import "./SecondPage.css"
import SideMenu from './SideMenu';
import LoadingPage from '../../LoadingPage';
import Errors from '../../Errors';
import Ads from '../../Ads';
import { motion,AnimatePresence } from 'framer-motion';

function SecondFrontPage() {
  const sliding={
    hidden:{x:-500},
    show:{x:0,transition:{
      type:"tween",
      stiffness:400,
   
  
    }},
    exit:{ x:-500,transition:{
      type:"tween",
      stiffness:400,
   
    }
    }
}

const[scrollNo,setScrollNo]=useState(0);
const[onLoading,setOnLoading]=useState(true);
const [errors,setErrors]=useState(false);
const [data,setData]=useState([])
function click(){
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
.then((response)=>response.json())
.then((datas)=>{
  const food=[{
  Instructions:datas.meals[14].strInstructions,
  image:datas.meals[14].strMealThumb,
  links:datas.meals[14].strYoutube,
  mealname:datas.meals[14].strMeal,
  id:1,
  classNam:"Secondpage"
  }, 
 { Instructions:datas.meals[1].strInstructions,
   image:datas.meals[1].strMealThumb,
   links:datas.meals[1].strYoutube,
   mealname:datas.meals[1].strMeal,
   id:2,
   classNam:"Secondpage1"
}, { Instructions:datas.meals[24].strInstructions,
  image:datas.meals[24].strMealThumb,
  links:datas.meals[24].strYoutube,
  mealname:datas.meals[24].strMeal,
  id:3,
   classNam:"Secondpage"
}, { Instructions:datas.meals[22].strInstructions,
  image:datas.meals[22].strMealThumb,
  links:datas.meals[22].strYoutube,
  mealname:datas.meals[22].strMeal,
  id:4,
  classNam:"Secondpage1"
}]
setData(food) 
setOnLoading(false)
 })
.catch(()=>{
    setErrors(true)
    setOnLoading(false)
})}
useEffect(()=>{
click()
},[])
const FrontData=data.map(datas=>{
  return(
  <div key={datas.id} className="secondpageparent" >
   <SecondPage  Instructions={datas.Instructions}  name={datas.mealname} image={datas.image} videolinks={datas.links} classN={datas.classNam}/>
  </div>)
}) 


window.addEventListener("scroll",()=>{
  setScrollNo(window.scrollY)
})


return(

<div className='SP' >
<AnimatePresence>
  {scrollNo>=350 && <motion.div
   className='sidemenu'
   variants={sliding}
   initial="hidden"
   animate="show"
   exit="exit"><SideMenu  className='sidemenu-'/></motion.div >}
   </AnimatePresence>
  <div className='sp_word'>
  <h1>Popular Options</h1>
      {FrontData}
      {onLoading&&<LoadingPage/>}
      {errors&& <Errors/>}
      {!onLoading && !errors && <Ads/>}
   </div>
</div>
)
}

export default SecondFrontPage;
