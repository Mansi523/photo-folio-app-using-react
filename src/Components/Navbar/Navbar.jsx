import React from 'react'
import {IoNotifications } from 'react-icons/io5';
import style from './Navbar.module.css';
import { useState } from 'react';
const Navbar = ({length,handleSearch,search}) => {
const[importdata,setimportdata] = useState("");
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
     <div className={style.searchbar}>
     <input type="text" onChange={(e)=>setimportdata(e.target.value)} onKeyUp={(e)=>handleSearch(e)} placeholder="Search..."/>
    {search.length>0 && importdata && 
      <div className={style.searchfilter}>
        <ul>

          {search.map((item,index)=>(
             
          <li className={style.searchindividual}key={index}>{item.name}</li>

          ))}
         
        </ul>
      </div>
   }
      </div>
     <div className={style.notificationIcon}>
      <div className={style.count}>{length}</div>
     <div><IoNotifications color="yellow" fontSize={35} id={style.bell}/></div>
     </div>
    </div>
    </header>
  )
}

export default Navbar