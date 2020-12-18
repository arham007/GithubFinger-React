import React from 'react';


const Profile=(props)=>{
  console.log(props)
  
    return(
        <>
        <div className="userPic">
      <img width="250px" height="200px" src={props.datas.avatar_url}  />

    </div>

   
   <div style={{textAlign:"center",fontSize:"2em",marginBottom:"-30px",color:"#526842"}}>
     <h4>{props.datas.name}</h4>
   </div>
    <div style={{display:"flex",justifyContent:"center"}} >
      <div style={{width:"40%"}} >
      <p style={{textAlign:"center",color:"#fff"}}>
        {props.datas.bio ? props.datas.bio:<div />}
      </p>

      </div>
    </div>

    <div style={{display:"flex",justifyContent:"center",marginTop:"30px",color:"#fff"}} >
      <div>
      <div>Followers  : <span className="repo">{props.datas.followers}</span></div>
      <div>Repository :<span  className="repo">{props.datas.public_repos}</span> </div>
  </div>
  <div style={{marginLeft:"100px"}}>
      <div>Following : <span  className="repo">{props.datas.following}</span></div>

      <div>Location : <span  className="repo">{props.datas.location}</span></div>
  </div>
    </div>
    <br />
  <div style={{textAlign:"center",marginTop:"30px",color:"#fff"}}>
  Github Profile URL :<br />
 <span style={{color:"#526842"}}>{props.datas.url}</span>
  </div>
  <br /> 
        </>
    )
}

export default Profile;