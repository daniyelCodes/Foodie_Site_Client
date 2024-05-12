import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import AboutPage from "../pages/about/AboutPage";
import ContactUs from "../pages/contact/ContactUs";
import MenuDetails from "../pages/shop/MenuDetails";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/menuDetails/:id",
                element: <MenuDetails/>
            },
            {
                path: "/cart-page",
                element: <CartPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
           
            {
                path: "/update-profile",
                element: <UpdateProfile />
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },

]);

export default router;