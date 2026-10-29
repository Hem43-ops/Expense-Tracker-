
import Mainlayout from "../layouts/main-layout";
import Home from "../pages/home";
import Login from "../pages/Login";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
const appRoutes = [
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path:"dashboard",
                element:<Dashboard />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
];

export default appRoutes;
