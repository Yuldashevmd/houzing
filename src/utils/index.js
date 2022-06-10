import NewProperty from "../components/newProperty/newProperty";
import PropertiesList from "../components/propertiesList/propertiesList";
import Generic from "../generic";

export const Pages = [{
        id: 1,
        path: '/',
        title: '',
        component: Generic
    },
    {
        id: 2,
        path: '/home',
        title: 'Home',
        component: Generic
    },
    {
        id: 3,
        path: '/properties',
        title: 'Properties',
        component: PropertiesList
    },
    {
        id: 4,
        path: '/contacts',
        title: 'Contacts',
        component: NewProperty
    },
    {
        id: 5,
        path: '/login',
        title: 'Login',
        component: Generic
    }
]