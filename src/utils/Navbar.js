import Generic from "../page/Generic";
import PropertiesList from "../components/propertiesList/propertiesList";
import HomePage from "../page/Home";

export const navbar = [{
        id: 1,
        title: "Home",
        path: "/home",
        element: < HomePage / > ,
    },
    {
        id: 2,
        title: "Properties",
        path: "/properties",
        element: < PropertiesList / > ,
    },
    {
        id: 3,
        title: "Contact",
        path: "/contact",
        element: < Generic / > ,
    },
];