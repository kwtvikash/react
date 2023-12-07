import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import UserContext from "./components/UserContext"
import Output from './components/Output';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">

      <UserContext>
      <Routes>
        <Route path="/" element= {<Landing/>}/>
      </Routes>
      <Routes>
        <Route path="/output" element= {<Output/>}/>
      </Routes>
      </UserContext>
    </BrowserRouter>
    </div>
  );
}

export default App;
