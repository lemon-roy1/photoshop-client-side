import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import ReviewUpdate from "../../Pages/Review/ReviewUpdate";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/login', 
          element: <Login/>
        },
        {
          path: '/signup', 
          element: <SignUp/>
        },
        {
          path: '/blog', 
          element: <Blog/>
        },
        {
          path:'/services',
          element: <Services/>
        },
        {
          path: 'addServices',
          element:<AddService/>
        },
        {
          path: '/update/:id',
          loader: ({params})=> fetch(`https://y-swart-three.vercel.app/reviews/${params.id}`) ,
          element:<ReviewUpdate></ReviewUpdate>
        },
       
        {
          path: '/Details/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`https://y-swart-three.vercel.app/services/${params.id}`)
        },
        {
          path: '/review',
          element: <PrivateRoute><Review></Review> </PrivateRoute>
        }
      ]
    }
  ]);

  export default router;