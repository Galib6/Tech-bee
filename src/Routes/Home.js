import { createBrowserRouter } from "react-router-dom";
import CourseCard from "../Components/CourseCard";
import Coursedetails from "../Components/CourseDetails/Coursedetails";
import Courses from "../Components/Courses/Courses";
import GetPremium from "../Components/GetPermiumAccess/GetPremium";
import HomePageBasicInfo from "../Components/HomePageBasicInfo.js/HomePageBasicInfo";
import Login from "../Components/Login/Login";
import SignUP from "../Components/SignUp/SignUP";
import Homepage from "../Layout/Homepage";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

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
                loader: () => fetch("https://assignment-10-server-nine.vercel.app/category"),
                element: <Courses></Courses>,
                children: [
                    {
                        path: "all",
                        loader: () => fetch("http://localhost:5000/category/01"),
                        element: <CourseCard></CourseCard>
                    },
                    {
                        path: ":id",
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                        element: <CourseCard></CourseCard>
                    },
                    {
                        path: "all/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <Coursedetails></Coursedetails>
                    },
                    {
                        path: ":id/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <Coursedetails></Coursedetails>
                    },
                    {
                        path: ":id/:id/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <PrivetRoutes><GetPremium></GetPremium></PrivetRoutes>
                    }
                ]
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