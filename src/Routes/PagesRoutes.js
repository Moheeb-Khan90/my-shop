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


const AppRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path='/my-shop' exact element={<Home />}
                />
                <Route
                    path='/product/:id' exact element={<SingleProduct />}
                />
                <Route
                    path='/products' exact element={< Products />}
                />
                <Route
                    path='/category/:ct' exact element={< Category />}
                />
                <Route
                    path='/signup' exact element={< Signup />}
                />

                <Route
                    path='/login' exact element={< Login />}
                />

                <Route
                    path='/carts'  element={< Cart />}
                />

            </Routes>


        </>
    )
}

export default AppRoutes