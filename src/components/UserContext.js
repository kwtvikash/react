import { createContext, useContext,useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext)

function UserProvider({children}){
    const [userDetails, setUserDetails] = useState({})
    const [outputList, setOutputList] = useState([]);
    const [name, setName] = useState("")
    const handleUserDetails = (key, value) => {
        setUserDetails((prev)=>{
            return {
                ...prev,
                [key]:value
            }
        })
    }
    const handleUserName = (value) => {
        setName(value)
    }
    const handleList = (fname, lname) => {
        setOutputList([...outputList, { fname, lname }]);
    }
    return (
        <UserContext.Provider value={{
            handleUserDetails,
            userDetails,
            name,
            handleList,
            outputList
        }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider