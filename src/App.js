import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Album/Form";
import AddAlbum from "./Components/Album/AddAlbum";
import AlbumList from "./Components/Album/AlbumList";
import { useState,useEffect} from "react";
import {db} from "./firebaseinIt";
import { addDoc,collection,getDocs,doc, deleteDoc,updateDoc,onSnapshot} from "firebase/firestore";
//import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[isbtn,setisbtn] = useState(false);
  const[name,setname] = useState("");
  const[url,seturl] = useState("");
  const[album,setalbum] = useState([]);
  const[search,sethandleSearch] = useState([]);
  
  const[update,setupdate] =useState(null);

  const handleClear=()=>{
      setname("");
      seturl("");
  };

  const handleCreate = async ()=>{
    if(!name || !url){
      return;
    }
    const album_name = {
      name:name,
      url:url
    }
    console.log(album_name);
    try{
     const data = await addDoc(collection(db,"albumData"),album_name)
     console.log("firebase-data",data);
     toast("Album created succesfully!");

    }
    catch(error){
     console.log("firebase error",error);
    }
    setname("");
    seturl("");
    
     setisbtn(false);
  }

useEffect(()=>{

 const album_data = async()=>{
  const querySnapshot = await onSnapshot(collection(db, "albumData"),(Snapshot)=>{
    const data = Snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id:doc.id
      }
    });
    console.log(data);
    setalbum(data);
  } );


 }
 album_data();

},[])

 //for delete operation
  const handleDelete =(item)=>{
    deleteDoc(doc(db, "albumData", item.id));

    toast("Album Deleted succesfully!");  
  }

//for setting item in update and showing the form 
  const handleUpdate = async(item)=>{
  setisbtn(true);
  setupdate(item);

  }
   //for update operation
 const updateAlbum = async ()=>{
  console.log("update");
  if(!name || !url){
    return;
  }
  console.log("update when");
  const album_name = {
    name:name,
    url:url
  }
try{
  console.log(album_name);
  const washingtonRef = doc(db, "albumData", update.id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef,album_name);
toast("Album Updated succesfully!");
}catch(err){
console.log("firebase update error",err);
toast("Something is wrong plz try again later!");
}

setname("");
seturl("");

setisbtn(false);
setupdate(null);
 }
  
 //search bar logic
const handleSearch=(e)=>{
const searchalbum = e.target.value.toLowerCase();
console.log(searchalbum);


const fliterasearch = album.filter((item,index)=>{
 return item.name.toLowerCase().includes(searchalbum)
})
console.log(fliterasearch)
sethandleSearch(fliterasearch);
// setalbum(fliterasearch);
}  



  return (
    <div>
    
   <Navbar
    length={album.length}
    handleSearch = {handleSearch}
    search={search}
   />
    <section style ={{width:"70%",margin:"auto"}}>
    {isbtn && <Form
               name = {name}
               setname = {setname}
               url ={url}
               seturl = {seturl}
               handleClear={handleClear}
               handleCreate={handleCreate}
               update ={update}
              updateAlbum = {updateAlbum}
              />}
   <AddAlbum setisbtn ={setisbtn} 
             isbtn = {isbtn}
   />
   <AlbumList
      album={album}
      handleDelete={ handleDelete}
      handleUpdate={ handleUpdate}
      search={search}
   />
    <ToastContainer />
    </section>
  
    </div>
  );
}

export default App;
