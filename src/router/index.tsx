import {createBrowserRouter, RouterProvider} from "react-router";

import Test from "../pages/Test";
import HookExample from "../pages/HookExample";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Test
    },
    {
        path: "/HookExample",
        Component: HookExample
    }
])


export const AppRouter = () => <RouterProvider router={router} />