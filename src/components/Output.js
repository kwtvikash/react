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
         Countery - {userDetails.countery}<br></br>
         State - {userDetails.state}<br></br>
         Distict - {userDetails.distict}<br></br>

        </div>

        <div className="output">
        <h2>Output:</h2>
        <div>
        <table border="1" style={{margin:"auto"}}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {outputList.map((data, index) => (
              <tr key={index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       
      </div>
       
       
      </div>
      </>
    )
}
export default Output;

