import React from 'react'
import style from './AddAlbum.module.css';

const AddAlbum = ({setisbtn,isbtn}) => {
 
  return (
    <section className={style.albumsection}>
    <div className={style.addalbm}><span>Your albums</span></div> 
    <div className={isbtn?style.cancelbtn:style.addbtn}>
        <button onClick={()=>setisbtn(!isbtn)}>{isbtn ? "Cancel":"Add btn"}</button>
        
        </div> 
    </section>
  )
}

export default AddAlbum