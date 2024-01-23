import {
    Route,
    Routes,
} from "react-router-dom";
import  Home  from "../Pages/Home/Home.js";
import Products  from "../Pages/Products/Products.js";
import SingleProduct from "../Pages/SingleProduct/SingleProduct.js"
import { Navbar } from "../Components/Navbar/Navbar.js";


const AppRoutes = () => {

    return (
        <>
        <Navbar/>
            <Routes>
                <Route
                    path='/' exact  element={<Home />}
                />
                <Route
                    path='/product/:id'  exact element={<SingleProduct />}
                />
                <Route
                    path='/products'  exact element={< Products/>}
                />
               
            </Routes>


        </>
    )
}

export default AppRoutes