import React from 'react'
import {IoNotifications } from 'react-icons/io5';
import style from "./Navbar.module.css";
import { useState,useEffect } from 'react';
const Navbar = ({length,handleSearch,search,visual,album,albumname}) => {
const[suggestionDispay,setsuggestionDispay] = useState(false);

useEffect(()=>{
  if(search.length>0){
    setsuggestionDispay(true);
  }
},[search])

let testvar={};
const test = ()=>{
  testvar = album.find((item)=>item.id == albumname.id);
}
test();

document.addEventListener("click",(e)=>{
if(e.target.id !== "suggestionbox" && e.target.id !== "inputValue"){
  setsuggestionDispay(false);
}
})

  return (
    <header>
     {/* left div */}
    <div className={style.left}>
      {/* this div is used for image tag */}
    <div className={style.imgIcon}>
    <img src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png" width="50" height="50" alt=""/>
    </div>
  <div className={style.heading}>
      <span>Photo-Folio</span>
    </div>
    </div>
    {/* right div */}
    <div className={style.right}>
    {visual && <div className={style.searchbar}>
     <input type="text" id="inputValue" onKeyUp={(e)=>handleSearch(e)} placeholder="Search..."/>
    {search.length>0 && suggestionDispay && 
      <div id="suggestionbox" className={style.searchfilter}>
        <ul>

          {search.map((item,index)=>(
             
          <li className={style.searchindividual}key={index}>{item.name}</li>

          ))}
         
        </ul>
      </div>
   }
      </div>}
     <div className={style.notificationIcon}>
      <div className={style.count}>{visual?length:testvar.albumlistInner.length}</div>
     <div><IoNotifications color="yellow" fontSize={35} id={style.bell}/></div>
     </div>
    </div>
    </header>
  )
}

export default Navbar