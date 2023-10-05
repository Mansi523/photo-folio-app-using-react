import React from 'react'
import style from './FormInner.module.css';
const FormInner = ({albumname,setinnername,setinnerurl,innername,innerurl,handleInnerClear,handleInnerCreate}) => {
  return (
    <div className={style.box}>
    <div className={style.top}>
      <span>Add Image to {albumname.name}</span>
    </div>
    <div className={style.bottom}>
      <div className={style.left}>
        <input type="text" placeholder='Tittle' required value={innername} onChange={(e)=>setinnername(e.target.value)}/>
        <input type="text" placeholder='Image URL' required value={innerurl} onChange={(e)=>setinnerurl(e.target.value)}/>
      </div>
      <div className={style.right}>
        <button className ={style.clearbtn} onClick={()=>handleInnerClear()}>Clear</button>
        <button className={style.createbtn} onClick={()=>handleInnerCreate()}>Create</button>
      </div>
    </div>
  </div>
  )
}

export default FormInner