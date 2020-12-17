import { useEffect, useState } from 'react';
import logo from './bg-main.jpg';
import './index.css';
import Data from './Data';


function App() {
  let [final,setFinal]=useState("");
  let [name,setName]=useState("");

  const inputEvent=(event)=>{
    setFinal(event.target.value);

  }
  const submit=()=>{
      setName(final)
  }


  console.log(logo)
  return (
   <>
      <div className="mainDiv">
        

        <div className="first_Div">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="2000">

            <p>UserFinder for <br /> <span className="span">github</span></p>
          </div>



        </div>
        <div className="dummyPara">
          <p>Check out the repos, followers, and more,<br />
       just<br />by entering a username.</p>

        </div>

        <div className="changing">
          <div >
            <input type="text" placeholder="Enter username" onChange={inputEvent} />
            <div>

              <button onClick={submit}>Submit</button>
            </div>
          </div>

        </div>
        
      


      </div>
    
    { name==="" ? null
    :   
     <Data asname={name}  />}
   
      
 
 
 

 </>
 );
}

export default App;
