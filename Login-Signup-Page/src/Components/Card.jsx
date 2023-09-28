import React, { useState } from "react";
import Image from './Image';
import SiginIn from "./SiginIn";
import SignUp from './SignUp';
function Card() {
  const [option , setOption] = useState(true) ;
  return (
    <div className="conatiner">
     <Image/>
   
    {
      option ? (<SiginIn setOption = {setOption} option = {option}/>) : (<SignUp setOption = {setOption}/>)
    }
    </div>
  );
}

export default Card;
