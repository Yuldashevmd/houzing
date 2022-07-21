import FavouritePage from "../components/Favourite/index";
import Generic from "../page/Generic";

export const user = [
  {
    id: 1,
    title: "My profile",
    path: "/profile",
    element: <Generic />,
  },
  {
    id: 2,
    title: "My Properties",
    path: "/myproperties",
    element: <Generic />,
  },
  {
    id: 3,
    title: "Favourites",
    path: "/favourite",
    element: <FavouritePage />,
  },
];
