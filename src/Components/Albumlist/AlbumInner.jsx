import React from 'react';
import style from "./AlbumInner.module.css";
import { MdOutlineModeEditOutline} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';
const AlbumInner = () => {
    const data =[{
        name:"images",
        url:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
        id:1,
    }
    ]
  return (
    <section className={style.AlbumList}>
    {
    data?.map((item)=>(
     <div className={style.container} key={item.id}  >
     <div className={style.edit}><MdOutlineModeEditOutline color="white" fontSize={20}/></div>
     <div className={style.delete}><RiDeleteBin6Line color="white" fontSize={20}/></div>
     <div className={style.card}>
       <div className={style.image}>
         <img
           src={item.url}
         />
       </div>
       <div className={style.text}>
         <span>{item.name}</span>
       </div>
     </div>
   </div>
    ))

    } 

 </section>

  )
}

export default AlbumInner;