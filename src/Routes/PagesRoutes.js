import {
    Route,
    Routes,
} from "react-router-dom";
import  Home  from "../Pages/Home/Home.js";
import Product from "../Pages/Product/Product.js"
import { Navbar } from "../Components/Navbar/Navbar.js";


const AppRoutes = () => {

    return (
        <>
        <Navbar/>
            <Routes>
                <Route
                    path='/' element={<Home />}
                />
                <Route
                    path='/product' element={< Product/>}
                />
                {/* <Route
                    path='/contact' element={<Signup />}
                />
                <Route
                    path='/about' element={<Signup />}
                /> */}
            </Routes>


        </>
    )
}

export default AppRoutes