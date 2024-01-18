import './Navbar.css'
import Logo from '../../Asset/logo.png'
import {  FaBars, FaCartPlus,FaUser, FaXmark, } from "react-icons/fa6";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [openMenu,setOpenMenu] =useState(null)
    const ShowMenuIcon = () =>{
        setOpenMenu('active')
    }
    const CloseMenuIcon = () =>{
        setOpenMenu(null)
    }
    return (
        <>
            <div id='navbar'>
                <div id='logo' className='customFlex'>
                    <img src={Logo} alt="" />
                    <div className='menuBar'>
                    {
                        openMenu==='active'?<i onClick={CloseMenuIcon}><FaXmark/></i>:
                        <i onClick={ShowMenuIcon}><FaBars/></i>

                    }
                    
                </div>
                </div>
               
                <div className={`menu-list customFlex ${openMenu}`}>
                    <Link to="/">home</Link>
                    <Link to="/product">products</Link>
                    <Link to="/contact">contact us</Link>
                    <Link to="/about">about us</Link>
                </div>
                <div className='other-list customFlex'>
                   <Link to="/" className='other-links'><FaCartPlus/></Link>
                 <Link to="/" className='other-links'><FaUser/></Link>  
                </div>
                
            </div>
        </>
    )
}
