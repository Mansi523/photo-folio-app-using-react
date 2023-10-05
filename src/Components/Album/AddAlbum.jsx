import React from 'react'
import style from './AddAlbum.module.css';
import {MdArrowBackIosNew} from "react-icons/md";
const AddAlbum = ({setisbtn,isbtn,visual,albumname,handleInnerDisplay}) => {
 
  return (
    <section className={style.albumsection}>
    <div className={style.addalbm}>
      {!visual &&
        <span style={{display:"block"}} onClick={()=>handleInnerDisplay()}> <MdArrowBackIosNew color={"blue"} fontSize={30}/></span>
       }
       {!visual && <><br/>
       <br/>
       </>
                  
       }
      <span 
      className={!visual && style.imageHeading}
      >
        {visual?"Your albums":`Images in ${albumname.name}`}</span>
      </div> 
    <div className={isbtn?style.cancelbtn:style.addbtn}>
        <button onClick={()=>setisbtn(!isbtn)}>{isbtn ? "Cancel":"Add btn"}</button>
        
        </div> 
    </section>
  )
}

export default AddAlbum