import HomePage from "./pages/home/home-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./pages/list/list";
import Layout from "./layout/layout"
import SinglePage from "./pages/single/single-page";
// import SinglePage from "./pages/single/single-page";
// import ProfilePage from "./routes/profilePage/profilePage";
// import Login from "./routes/login/login";
// import Register from "./routes/register/register";

function App() {
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
          path:"/:id",
          element:<SinglePage/>
        },
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
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