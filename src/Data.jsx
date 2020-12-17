import React ,{useEffect, useState} from 'react';
import Profile from './Profile';
import './index.css'

const Data=(props)=>{
    console.log(props)
    let name=props.asname;

    let [apidata,setapiData]=useState("");
//      useEffect(()=>{
//     fetch(`https://api.github.com/users/${name}`)
//     .then((res)=>{
//       return res.json();
//     })
//     .then((data)=>{
//       console.log(data)
//       setapiData(data)

//     })
//   },[props.asname])

    return(
        <>
        {apidata==="" ?<div style={{display:'grid',placeItems:"center",marginTop:"20px"}}><div class="loader"></div></div> : <Profile datas={apidata} />}
        </>
    )
}

export default Data;