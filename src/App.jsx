import React, { useContext } from "react";
import HomePage from "./pages/home/home-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./layout/layout"
import SinglePage from "./pages/single/single-page";
import DoctorPage from "./pages/doctors/Doctor";
// import SinglePage from "./pages/single/single-page";
import ProfilePage from "./pages/profile/Profile";
import { DarkModeContext } from "./context/DarkModeContext";
import DoctorsSinglePage from "./pages/docSinglePage/docSinglePage";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/DarkmodeContext";
// import Login from "./routes/login/login";
// import Register from "./routes/register/register";

function App() {


  
  // const {darkMode}=useContext(DarkModeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/doctor/:id",
          element:<DoctorsSinglePage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },

        {
          path:"/doctor",
          element:<DoctorPage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
   
    
   
  );
}

export default App;