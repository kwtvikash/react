import React, { useContext, useEffect, useState } from "react";
import User from "./UserContext";
import { login, counteryCode, getStatesByCountry ,getDistByState} from "./helper";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

function Landing() {

  // import Cookies from 'universal-cookie';
  // const cookies = new Cookies();
  // const token = cookies.get("token");
  // cookies.set('token', signIn.data.token, { path: '/' });

  const navigate = useNavigate();

  // const userInfo = useContext(User);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [distList, setDistList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [selectedState, setSelectedState] = useState("");

  const [selectedDist, setSelectedDist] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  // const [outputList, setOutputList] = useState([]);
  const { userDetails, handleUserDetails, outputList, handleList } = useUser()

  useEffect(() => {
    const fetchData = async () => {
      const countries = await counteryCode();
      setCountryList(countries);
    };
    

    fetchData();
  }, []);

  const clickHere = async () => {
    let res = await login();
    console.log("dfghj", res);
  };

  const handleCountryChange = async (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    handleUserDetails('countery', selectedCountry)

    const states = await getStatesByCountry(selectedCountry);
    setStateList(states);
  };

  const handleCStateChange = async (event) => {
    const selectedCountry = event.target.value;
    setSelectedState(selectedCountry);
    handleUserDetails('state', selectedCountry)

    const distict = await getDistByState(selectedCountry);
    setDistList(distict);
  };

  const handleDictChange = async (event) => {
    const selectedCountry = event.target.value;
    setSelectedDist(selectedCountry);
    handleUserDetails('distict', selectedCountry)
  };

  const handleAddData = () => {
    // Validate that both fname and lname are not empty
    if (fname.trim() !== "" && lname.trim() !== "") {
      // Update output list
      // setOutputList([...outputList, { fname, lname }]);
      handleList(fname, lname)
      // Clear input fields
      setFname("");
      setLname("");
    }
  };

  return (
    <>
      <div>
        {/* <p>User Name: {userInfo.name}</p>
        <p>First Name: {userInfo.fname}</p> */}
      </div>

      <div>
        <label htmlFor="countrySelect">Select a Country:</label>


        <select
          id="countrySelect"
          onChange={handleCountryChange}
          value={userDetails.countery}
        >
          <option value="">Select a Country</option>
          {countryList.map((country) => (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common} - {country.name.common}
            </option>
          ))}
        </select>

      </div>


        <div>
          <label >Select a State:</label>
          <select 
          onChange={handleCStateChange}
          value={userDetails.state}
          >
            {/* Map through the stateList and display options */}
            {stateList.map((state) => (
              <option key={state.name.common} value={state.name.common}>
              {state.name.common} - {state.name.common}
            </option>
            ))}
          </select>
        </div>

        <div>
          <label >Select a Distict:</label>
          <select 
          onChange={handleDictChange}
          value={userDetails.distict}
          >
            {/* Map through the stateList and display options */}
            {distList.map((state) => (
              <option key={state.name.common} value={state.name.common}>
              {state.name.common} - {state.name.common}
            </option>
            ))}
          </select>
        </div>
     

   
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div>
        <input
          type="text"
          placeholder="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <button onClick={handleAddData}>Add</button>
      </div>

      <div className="output">
        <h2>Output:</h2>
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


      <button onClick={() => navigate('/output')}>Output</button>
    </>
  );
}

export default Landing;
