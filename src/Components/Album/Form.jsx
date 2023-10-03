import React from 'react'
import style from './Form.module.css';
import { useEffect } from 'react';
const Form = ({name,setname,url,seturl,handleCreate,handleClear,update,updateAlbum}) => {
  
  useEffect(()=>{
    console.log("testing");
    if(update){
      console.log("if testing");
    setname(update.name);
    seturl(update.url);
    }
  },[update])

  return (
    <div className={style.box}>
      <div className={style.top}>
        <span>Create an Album</span>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <input type="text" placeholder='Album Name' value ={name} required onChange={(e)=>setname(e.target.value)}/>
          <input type="text" placeholder='Album Theme'value={url} required onChange={(e)=>seturl(e.target.value)}/>
        </div>
        <div className={style.right}>
          <button className ={style.clearbtn} onClick={handleClear}>Clear</button>
          <button className={style.createbtn} onClick={update?updateAlbum:handleCreate}>{update?"update":"Create"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form