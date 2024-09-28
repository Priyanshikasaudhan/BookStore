import {} from "react";
import Home from "./home/Home";
import { Route, Routes } from 'react-router-dom' 
import Courses from "./courses/Courses";

function App() {
  return (
    <>
     {/* <Home/>  */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coures" element={<Courses/>}/>
     </Routes>
    </>
  );
}

export default App;
