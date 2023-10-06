import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Album/Form";
import AddAlbum from "./Components/Album/AddAlbum";
import AlbumList from "./Components/Album/AlbumList";
import AlbumInner from "./Components/Albumlist/AlbumInner";
import FormInner from "./Components/Albumlist/FormInner";
import { useState,useEffect} from "react";
import {db} from "./firebaseinIt";
import { addDoc,collection,getDocs,doc, deleteDoc,updateDoc,onSnapshot, arrayUnion, arrayRemove} from "firebase/firestore";

//import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[isbtn,setisbtn] = useState(false);
  const[name,setname] = useState("");
  const[url,seturl] = useState("");
  const[album,setalbum] = useState([]);
  const[search,sethandleSearch] = useState([]);
  const[visual,setvisual]=useState(true);
  const[albumname,setalbumname]=useState({});
  const[update,setupdate] =useState(null);
  const[innername,setinnername] = useState("");
  const[innerurl,setinnerurl] = useState("");

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
      url:url,
      albumlistInner:[],
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

//function for inner album display
const handleInnerDisplay=()=>{
setvisual(!visual);
}
//function for setting the name of the inner album form
const handleNameInnerForm=(e)=>{
  setalbumname(e);
}
//function for clearing the value of the innerform
const handleInnerClear=()=>{
 setinnername("");
 setinnerurl("");
}
//function for hiding form as well as pushing data in the albumlist 
const handleInnerCreate=async()=>{
  if(innername == ""){
    toast("plz enter a valid name!");
    return;
  } 
  if(innerurl == ""){
    toast("plz enter a valid url!");
    return;
  }
const Innerdata = {innername,innerurl,id:Date.now()};
const washingtonRef = doc(db, "albumData",albumname.id);

// Atomically add a new region to the "regions" array field.
await updateDoc(washingtonRef, {
  albumlistInner: arrayUnion(Innerdata)
});
toast(`Image added to ${albumname.name}`);

// Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//     regions: arrayRemove("east_coast")
// });
  setisbtn(false);

}
  return (
    <div>
    
   <Navbar
    length={album.length}
    handleSearch = {handleSearch}
    search={search}
   />
    <section style ={{width:"70%",margin:"auto"}}>
    {visual?<>{isbtn && <Form
               name = {name}
               setname = {setname}
               url ={url}
               seturl = {seturl}
               handleClear={handleClear}
               handleCreate={handleCreate}
               update ={update}
              updateAlbum = {updateAlbum}
              />}</>:<>{isbtn && <FormInner
              albumname={albumname}
              setinnername={setinnername}
              setinnerurl={setinnerurl}
              innername={innername}
              innerurl={innerurl}
              handleInnerClear={handleInnerClear}
            handleInnerCreate={handleInnerCreate}
              />}</>
         
    }

   <AddAlbum setisbtn ={setisbtn} 
             isbtn = {isbtn} 
             visual = {visual}
             albumname = {albumname}
            handleInnerDisplay={handleInnerDisplay}
   />
   {
    visual?<AlbumList
    album={album}
    handleDelete={ handleDelete}
    handleUpdate={ handleUpdate}
    search={search}
    handleInnerDisplay={handleInnerDisplay}
    handleNameInnerForm={handleNameInnerForm}
 />:<AlbumInner
 album={album}
 albumname={albumname}
 />
   }
 
    <ToastContainer />
    </section>
  
    </div>
  );
}

export default App;
