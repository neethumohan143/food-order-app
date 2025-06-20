import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import {Route, Routes} from 'react-router-dom'
import Add from "./pages/Add/Add"
import List from "./pages/List/List"
import { useState } from "react";
import Orders from "./pages/Orders/Orders"
import Users from "./pages/Users/Users"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login/Login"


const App = () => {
  
  const [showLogin, setShowLogin] = useState(false);


  
  const url = "https://neethumohan-food-order-app-backend.onrender.com";
  // const url = "http://localhost:5000"
  
  return (<>
   <ToastContainer />
    <div>{!showLogin?<Login url={url} setShowLogin={setShowLogin} />:<>
     
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route  path="/add" element={<Add url={url}/>} />
          <Route  path="/list" element={<List url={url}/>} />
          <Route  path="/users" element={<Users url={url}/>} />
          <Route  path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div></>}
    </div></>
  )
}

export default App
