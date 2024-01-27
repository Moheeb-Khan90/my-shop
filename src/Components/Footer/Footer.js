import logo from '../../Asset/logo.png'
import './Footer.css'
import { FaBlenderPhone, FaEnvelope, FaFacebook, FaGoogle, FaLinkedin, FaLocationDot, FaSquareInstagram, FaTwitter } from 'react-icons/fa6'


const Footer = () => {
    return (
        <>
        
            <div id="footer-main" className='my-3'>
                <div id="footer-1">
                    <div id="logo-footer">
                        <img src={logo} alt="" />
                    </div>
                    <div id="address">
                        <FaLocationDot id='icons-address' /><span className='address'>xyz Main Street, Anytown, Pakistan</span>
                    </div>
                    <div id="contact">
                        <FaBlenderPhone id='icons-phone' /><span className='contact'>0301-xxxxx</span>
                    </div>
                    <div id="email">
                        <FaEnvelope id='icons-mail' /><span className='email'>xyz@gmail.com</span>
                    </div>
                </div>
                <div id="footer-2">
                    <div id="information">
                        <span>information</span>
                        <ul id='info-list'>
                            <li className='info-item'>About Us</li>
                            <li className='info-item'> Delivery Information</li>
                            <li className='info-item'>Privacy Policy</li>
                            <li className='info-item'>Terms & Conditions</li>
                            <li className='info-item'>Suppliers</li>
                            <li className='info-item'> Our Stores</li>
                        </ul>
                    </div>
                    <div id="customerServices">
                        <div id="information">
                            <span>customer services</span>
                            <ul id='info-list'>
                                <li className='info-item'>Contact Us</li>
                                <li className='info-item'> Returns</li>
                                <li className='info-item'>Wish List</li>
                                <li className='info-item'>Order History</li>
                                <li className='info-item'>Site Map</li>
                                <li className='info-item'>My Account</li>
                            </ul>
                        </div>
                    </div>
                    <div id="extras">
                        <div id="information">
                            <span>extras</span>
                            <ul id='info-list'>
                                <li className='info-item'>Brands</li>
                                <li className='info-item'> Gift Vouchers</li>
                                <li className='info-item'>Affiliates</li>
                                <li className='info-item'>Wish List</li>
                                <li className='info-item'>Blog</li>
                                <li className='info-item'>Specials</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="footer-3">
                    <div id="information">
                        <span>follow us</span>
                        <ul id='info-list'>
                            <li className='info-item'><FaFacebook className='footer-icon facebook' /></li>
                            <li className='info-item'><FaGoogle className='footer-icon google' /></li>
                            <li className='info-item'><FaSquareInstagram className='footer-icon instagram' /></li>
                            <li className='info-item'><FaTwitter className='footer-icon twitter' /></li>
                            <li className='info-item'><FaLinkedin className='footer-icon linkedin' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer