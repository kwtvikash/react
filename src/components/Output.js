import React from "react";
import {useUser} from "./UserContext";
import { useNavigate } from "react-router-dom";
function Output(){
    const navigate = useNavigate()
    const { outputList ,userDetails} = useUser()

    console.log("outputList",outputList)
    return(
        <>
        <div>
            <button onClick={()=>navigate('/home')}>Back</button>
        </div>
        <div className="output">
         <div>
         Countery - {userDetails.countery}
        </div>
        <h2>Output:</h2>
        <ul>
          {outputList.map((data, index) => (
            <li key={index}>{`${data.fname} ${data.lname}`}</li>
          ))}
        </ul>
      </div>
      </>
    )
}
export default Output;

