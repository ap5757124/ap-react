import {createBrowserRouter, RouterProvider} from "react-router";

import Test from "../pages/Test";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Test
    }
])


export const AppRouter = () => <RouterProvider router={router} />