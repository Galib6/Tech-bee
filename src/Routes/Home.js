import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Courses/Courses";
import HomePageBasicInfo from "../Components/HomePageBasicInfo.js/HomePageBasicInfo";
import Login from "../Components/Login/Login";
import SignUP from "../Components/SignUp/SignUP";
import Homepage from "../Layout/Homepage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
        children: [
            {
                path: "/",
                element: <HomePageBasicInfo></HomePageBasicInfo>,
            },
            {
                path: "/courses",
                loader: () => fetch("https://assignment-10-server-nine.vercel.app/courses"),
                element: <Courses></Courses>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUP></SignUP>,
            },

        ]
    }



])