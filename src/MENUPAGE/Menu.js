import React, { useEffect, useState } from 'react';
import SideMenu from '../FRONT/SECONPAGE/SideMenu'
import "../FRONT/SECONPAGE/SecondPage.css"
import Menubox from './Menubox';
import Errors from "../Errors"
import LoadingPage from "../LoadingPage"
import MenuDisplay from './MenuDisplay';
import "./menu.css"
function Menu() {
const [data,setData]=useState([]);
const[isloading,setIsLoading]=useState(true);
const[isError,setIsError]=useState(false);
const[Menu,setMenu]=useState([])
const[displayMenu,setDisplayMenu]=useState(false)




const  getdata=()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s").
    then((resp)=>resp.json()).
    then((datagroup)=>{

    setData(datagroup.meals)
    setIsLoading(false)

    }).catch(()=>{
      setIsError(true)
      setIsLoading(false)
    }
    )
}


useEffect(()=>{
  getdata()
},[])
const NewData=data.map((datas)=>{
  return(
    <div key={datas.idMeal} className="div" onClick={()=>getmenu(datas.idMeal)}>
   <Menubox 
    Totaldata={datas}
    Name={datas.strMeal} 
    Area={datas.strArea} 
    Type={datas.strTags}
    img={datas.strMealThumb}
    />
    </div>
  )
})
const getmenu=(id)=>{
  setDisplayMenu(!displayMenu)
  const Menudisplay=data.filter((mydata)=>{
  if(mydata.idMeal===id){
    return mydata
  }
  
 }).map((mydata)=>{
   return<div key={mydata.idMeal}  className='menuDisplay'>
     <MenuDisplay myprops={mydata}  closeMenu={()=>{setDisplayMenu(false)}}/>
   </div>
 })
setMenu(Menudisplay)}
 
  

  return(
    <div className='menucontainer'> 
     <h1 className="menuhead" >Menu</h1>
    <div className='menu' >
      {(isloading||isError)&&<div className="menuloading">
      {isloading&&<LoadingPage/>}
      {isError && <Errors/>}
        </div >}
      { NewData  }
      {displayMenu && Menu}
      <div className='sidemenu'>
      <SideMenu className="sidemenu-" />
      </div>

    </div>
    </div>)
 
}

export default Menu;
