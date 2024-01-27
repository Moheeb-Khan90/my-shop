import './Navbar.css'
import Logo from '../../Asset/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars, FaCartPlus, FaUser, FaXmark, } from "react-icons/fa6";
export const Navbar = () => {
   const totalCart = useSelector((state) => state.addToCart)
  
    const [openMenu, setOpenMenu] = useState(null)
    const ShowMenuIcon = () => {
        setOpenMenu('active')
    }
    const CloseMenuIcon = () => {
        setOpenMenu(null)
    }
    const handleLinkClick = () => {
        setOpenMenu(false);
    };
    return (
        <>
            <div id='navbar'    >
                <div id='logo' className='customFlex'>
                   <Link to='/my-shop'><img src={Logo} alt="" /></Link>
                    <div className='menuBar'>
                        {
                            openMenu === 'active' ? <i onClick={CloseMenuIcon}><FaXmark /></i> :
                                <i onClick={ShowMenuIcon}><FaBars /></i>

                        }

                    </div>
                </div>

                <div className={`menu-list customFlex ${openMenu}`}>
                    <Link onClick={handleLinkClick} to="/my-shop">home</Link>
                    <Link onClick={handleLinkClick} to="/products">products</Link>
                    <Link onClick={handleLinkClick} to="/contact">contact us</Link>
                    <Link onClick={handleLinkClick} to="/about">about us</Link>
                </div>
                <div className='other-list customFlex'>
            <Link to="/carts" className='other-links'><FaCartPlus /><span className='cart-length'>({totalCart.length})</span></Link>
            
                    <Link to="/signup" className='other-links'><FaUser /></Link>
                </div>

            </div>
        </>
    )
}
