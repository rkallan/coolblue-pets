import loadable from "@loadable/component";

const Homepage = loadable(() => import(/* webpackChunkName: "Homepage" */ "pages/Homepage"));
const Example = loadable(() => import(/* webpackChunkName: "Example" */ "pages/Example"));

const Error = loadable(() => import(/* webpackChunkName: "Error" */ "pages/Error"));
const Error403 = loadable(() => import(/* webpackChunkName: "Error403" */ "pages/Error/Error403"));
const Error404 = loadable(() => import(/* webpackChunkName: "Error404" */ "pages/Error/Error404"));

const Pets = loadable(() => import(/* webpackChunkName: "Pets" */ "pages/Pets"));

const routeConfiguration = [
    {
        id: 20,
        path: "/",
        exact: true,
        authenticated: false,
        element: <Homepage />,
    },
    {
        id: 30,
        path: "/pets",
        exact: true,
        authenticated: false,
        element: <Pets />,
    },
    {
        id: 1000,
        path: "/example",
        element: <Example />,
        exact: true,
        authenticated: false,
    },
    {
        id: 10,
        path: "/error/*",
        element: <Error />,
        title: "Error",
        children: [
            {
                id: 10,
                routeId: 10,
                path: "403",
                element: <Error403 />,
                title: "Error403",
                exact: true,
            },
            {
                id: 20,
                routeId: 10,
                path: "404",
                element: <Error404 />,
                title: "Error404",
                exact: true,
            },
        ],
    },
    {
        id: 5,
        path: "*",
        element: null,
        redirect: "/error/404",
    },
];

export default routeConfiguration;
