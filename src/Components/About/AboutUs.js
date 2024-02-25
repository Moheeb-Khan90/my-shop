import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <section className='container my-5' id='about-main-section'>
                <h1 className='p-3' id='about-main-heading'>Welcome to My Shop</h1>
                <h2 className='px-3'>Our Story</h2>
                <p className='px-3'>Founded in 2024, My Shop has grown from a small passion project to a thriving online store. The idea was born out of a love for Amazon, and our founder's desire to share that passion with the world. Today, we are proud to offer a carefully curated selection of products that reflect our commitment to quality, creativity, and customer satisfaction.</p>
                <h3 className='px-3'>What Sets Us Apart</h3>
                <ul>
                    <li>
                        <h5>Curated Excellence</h5>
                        <p className='px-3'>Every product in our inventory is handpicked for its quality, craftsmanship, and uniqueness. We believe in offering you items that stand out and make a statement.</p>
                    </li>
                    <li>
                        <h5>Customer-Centric Approach</h5>
                        <p className='px-3'>Your satisfaction is our top priority. From the moment you browse our website to the time your order arrives at your doorstep, we want your experience with My Shop to be seamless and enjoyable.</p>
                    </li>
                    <li>
                        <h5>Passionate Team:</h5>
                        <p className='px-3'>Behind My Shop is a team of dedicated individuals who are as passionate about [your niche] as you are. We are here to answer your questions, provide recommendations, and ensure that you have the best shopping experience possible.</p>
                    </li>
                </ul>





                <h3 className='px-3'>Our Commitment</h3>
                <ul>
                    <li>
                        <h5>Quality</h5>
                        <p className='px-3'>We stand by the quality of our products. Each item is carefully inspected to meet our standards before it reaches you.</p>
                    </li>
                    <li>
                        <h5>Community</h5>
                        <p className='px-3'>My Shop is more than just a store; it's a community of like-minded individuals who share a love for XYZ. Join us on X--Y--Z to connect with others who appreciate the My Shop experience.</p>
                    </li>
                </ul>
                <div className='my-5 text-center'>
                    <h4>Contact Us</h4>
                    <Link to='/contact'>If Any Queries, So Please contact US</Link>
                </div>
            </section>
        </>
    )
}

export default AboutUs