import React,{ useState} from 'react';
import axios from 'axios';
import './App.css';

const App=()=>{


  let [name,setName]=useState("")
  let [user,setUser]=useState("");
  let [err,setErr]=useState("");

 /* useEffect(()=>{
    console.log("gajHDGA")
    axios.get(`https://api.github.com/users/${name}`)
    .then((res)=>console.log(res))
    .catch((err)=>{
      console.error("err",err);
    })
  },[name])*/
  function fetchUser(){
    if(name===""){
      setErr("You should type username")
      return;
    }
    axios.get(`https://api.github.com/users/${name}`)
    .then((res)=>{
      console.log(res.data)
      setUser(res.data);
      setErr("")
    })
    .catch((err)=>{
      setUser("");
      setErr("No data found");
      console.error("err",err);
    })
  }

  function clear(){
    setErr("");
    setName("");
    setUser("")
  }

  return (
    <div className='App'>
    <div className='ser'>
      <input type="text" placeholder="Enter UserName" onChange={(e)=>setName(e.target.value)} value={name}/>
      <button onClick={fetchUser}>Get User Data</button>
      <button onClick={clear}>Clear</button>
    </div>
    <div>
      {
        user.html_url!==undefined &&
        <div className='data'>
          <img src={user.avatar_url} style={{width:"100px"}} alt={user.login}/>
          <h1>UserName :: {user.login}</h1>
          <p>Followers :: {user.followers}</p>
          <p>Following :: {user.following}</p>
          <p>Public Repo :: {user.public_repos}</p>
          <button><a href={user.html_url}>Go to Profile</a></button>
        </div>
      }
      <div>
        {err!=="" &&<h1 style={{color:"red"}}>{err}</h1>}
      </div>
      </div>
    </div>
    )
   
    }

export default App;
