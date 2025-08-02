import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup"
import "./style.css";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Mycource from "./components/Mycource";
import Addcource from "./components/Addcource";
import CourseDetails from "./components/CourseDetails";
import Contents from "./components/Contents";
import Studentlist from "./components/Studentlist";
import StudentProfile from "./components/StudentProfile";
 
 


const App = () => {
   const myRouter = createBrowserRouter([
      { path: '/', Component:Signup},
      { path: "/login", Component: Login },
      { path: '/signup', Component: Signup },
      {path:'/DashBoard', Component:DashBoard,children:[
         {path:'',Component:Home},
         {path:'Home',Component:Home},
         {path:'My-cource',Component:Mycource},
         {path:'Add-cource',Component:Addcource},
         {path:'Course-details/:id',Component:CourseDetails},
         {path:'contents/:id',Component:Contents},
         {path:'students-list/:id',Component:Studentlist},
         {path:'student-profile/:stuidentiod',Component:StudentProfile}
        
        
      ]}
   ])
   return (
      <div>
         <RouterProvider router={myRouter}></RouterProvider>
      </div>
   )

}

export default App
