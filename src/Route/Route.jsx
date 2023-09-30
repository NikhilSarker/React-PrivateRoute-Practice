import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../components/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import Dashboard from "../Pages/Dashboard/Dashboard";

const CreateMyRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
    ]
  },
]);

export default CreateMyRoute;