import axios from "axios";
//import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar.jsx";
import { useEffect, useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import MusicDashboard from "./Components/MusicDashboard.jsx";

function App() {

  const[musics, setMusics] = useState([]);
  const[music, setMusic] = useState();
  const[showAddForm, setShowAddForm] = useState(false);
  const[showEditForm, setShowEditForm] = useState(false);

  const apiUrl = "http://localhost:11451/music";

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      //console.log("useEffect response data: ", response.data);
      setMusics(response.data);
    });
  }, []);

  function handleEditMusic(music)
  {
    let url = apiUrl + "/" + music.id;

    axios({
      method: "post",
      url: url,
      data: {
        Id: music.id,
        Title: music.title,
        Artist: music.artist
      },
      config:{
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }
    }).then(response => {
      console.log("Edit Music Successful: ", response.data);
      //toast.success("Music Updated Successfully", {position: toast.POSITION.TOP_RIGHT});
      //  const {name, value} = response.data;
      //  setMusic({...music, [name]: value});

      //  console.log("music: ", music);
      //  setMusics([...musics, music]);
      

      let updatedMusics = musics.map(m=> {
        if(m.id == music.id)
        {   
          return music;
        }

        return m;
      });

       console.log("music: ", music);
      
       setMusics(updatedMusics);

       console.log("musics: ", musics);
    }).catch(err => { 
      console.log("Edit Music Error: " + err);
    });
  }

  function handleAddMusic(music)
  {
    const data = {
      Title: music.title,
      Artist: music.artist
    };

    axios({
      method: "put",
      url: apiUrl,
      data: data,
      config:{
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }
    }).then(response => {
      console.log("handleAddMusic: ", response.data);
      //toast.success("Music Added Successfully", {position: toast.POSITION.TOP_RIGHT});
      const {name, value} = response.data;

      setMusic({...music, [name]: value});      

      setMusics([...musics, music]);
    }).catch(err => {
      console.log("Add Music Error: " + err);
    });   
    
  }

  function addForm()
  {
    setShowEditForm(false);
    setShowAddForm(true);
  }

  function editForm(music)
  {
    setMusic("");
    setShowEditForm(true);
    setShowAddForm(false);
    setMusic(music);
  }

  function closeForm()
  {
    setShowEditForm(false);
    setShowAddForm(false);    
    setMusic("");
  }

  function deleteMusic(id)
  {    
    setShowEditForm(false);
    setMusic("");

    let url = apiUrl + "/" + id;

    axios.delete(url)
    .then(() => {
      toast.success("Music Deleted Successfully", {position: toast.POSITION.TOP_RIGHT });
    })
    .catch(err => {
      console.log("Delete Music Error: " + err);
    });

    setMusics([...musics.filter(x=> x.id !== id)]);
  }

  return (
    <>
      <NavBar addForm={addForm} />
      <h1>Music Data</h1>
      <MusicDashboard         
        musics = {musics}
        music = {music}
        editForm = {editForm}        
        deleteMusic = {deleteMusic}
        closeForm = {closeForm}
        handleAddSubmit = {handleAddMusic}
        handleEditSubmit = {handleEditMusic}
        showAddForm = {showAddForm}
        showEditForm = {showEditForm}
      />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
