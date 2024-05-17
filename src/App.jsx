import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Form from "./components/Form/Form";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout=()=>{
  const location = useLocation();
 const isHomePage = location.pathname === "/";
 return (
    <div className="app">
      {isHomePage && <Navbar />}  
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([{
path:"/",
element:<Layout/>,
children:[
  {
    path:"/",
   element:<Form/>
  },
  {
    path: "/section2",
    element: <SectionTwo/>
  },
]}])

const App = () => {
 return (
   
      <RouterProvider router={router} />
      
  );
};

export default App;
