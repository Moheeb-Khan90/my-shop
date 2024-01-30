import {
    Route,
    Routes,
} from "react-router-dom";
import Home from "../Pages/Home/Home.js";
import Products from "../Pages/Products/Products.js";
import SingleProduct from "../Pages/SingleProduct/SingleProduct.js"
import { Navbar } from "../Components/Navbar/Navbar.js";
import Category from "../Pages/Category/Category.js";
import Signup from "../Pages/SignUp/Signup.js";
import Login from "../Pages/Login/Login.js";
import Cart from "../Pages/Cart/Carts.js";
import Contact from "../Pages/Contactus/Contact.js";
import About from "../Pages/Aboutus/About.js";


const AppRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path='/' exact element={<Home />}
                />
                <Route
                    path='/product/:id'  element={<SingleProduct />}
                />
                <Route
                    path='/products'  element={< Products />}
                />
                <Route
                    path='/contact'  element={< Contact />}
                />
                <Route
                    path='/about'  element={< About />}
                />
                <Route
                    path='/category/:ct'  element={< Category />}
                />
                <Route
                    path='/signup'  element={< Signup />}
                />

                <Route
                    path='/login'  element={< Login />}
                />

                <Route
                    path='/carts'  element={< Cart />}
                />

            </Routes>


        </>
    )
}

export default AppRoutes