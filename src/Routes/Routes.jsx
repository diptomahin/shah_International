import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Subsidiary from "../Pages/Subsidiaries";
import Gallery from "../Pages/Gallary";
import Certifications from "../Pages/Certifications";
import SubsidiaryDetails from "../Pages/SubsidiaryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/subsidiaries",
          element:<Subsidiary/>
        },
        {
          path:"/subsidiary/:id",
          element:<SubsidiaryDetails/>
        },
        {
          path:"/gallery",
          element:<Gallery/>
        },
        {
          path:"/certifications",
          element:<Certifications/>
        },
    ]
  },
]);

export default router;