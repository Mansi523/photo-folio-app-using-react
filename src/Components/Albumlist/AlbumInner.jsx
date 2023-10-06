import React from 'react';
import style from "./AlbumInner.module.css";
import { MdOutlineModeEditOutline} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';
const AlbumInner = ({album,albumname}) => {


    let testvar={};
    const test = ()=>{
      testvar = album.find((item)=>item.id == albumname.id);
      console.log("testvar",testvar);
    }
    test();
  return (
    <section className={style.AlbumList}>
    {
    testvar.albumlistInner?.map((item)=>(
     <div className={style.container} key={item.id}  >
     <div className={style.edit}><MdOutlineModeEditOutline color="white" fontSize={20}/></div>
     <div className={style.delete}><RiDeleteBin6Line color="white" fontSize={20}/></div>
     <div className={style.card}>
       <div className={style.image}>
         <img
           src={item.innerurl}
         />
       </div>
       <div className={style.text}>
         <span>{item.innername}</span>
       </div>
     </div>
   </div>
    ))

    } 

 </section>

  )
}

export default AlbumInner;