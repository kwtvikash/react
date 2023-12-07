import React from "react";
import {useUser} from "./UserContext";

function Output(){
    const { outputList } = useUser()

    console.log("outputList",outputList)
    return(
        <div className="output">
        <h2>Output:</h2>
        <ul>
          {outputList.map((data, index) => (
            <li key={index}>{`${data.fname} ${data.lname}`}</li>
          ))}
        </ul>
      </div>
    )
}
export default Output;