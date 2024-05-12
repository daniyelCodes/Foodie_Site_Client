import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import '../App.css'
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";


const Main = () => {
  const { loading } = useContext(AuthContext)
  return (
    <div className="bg-white" >
      
          <div >
            <Navbar />
            <Outlet />
            <Footer />
          </div>
  

    </div>
  )
}

export default Main