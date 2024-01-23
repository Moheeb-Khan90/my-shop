import React, { useState } from 'react'
import './Filter.css'
import { FaCaretDown, FaFilter } from 'react-icons/fa6'

const Filter = () => {

    const [openDropDown, setOpenDropDown] = useState(' ');
    const handleOpenDropDown = () => {
        setOpenDropDown((prevOpenDropDown) =>
            (prevOpenDropDown === '' ? 'active-dropdown-list' : '')
        );
    }

    return (
        <>
                <span className='filter-title'><FaFilter className='filter-icon'/> filter</span>
            <div id="filter-main">
                <div className="filter-dropdown" onClick={handleOpenDropDown}>
                    <span className='filter-dropdown-title'>filter by type</span>
                    <span className='filter-dropdown-icon'><FaCaretDown /></span>
                    <div id='dropdown-list' className={`dd-menu ${openDropDown}`}>
                        <div className="dropdown-items">
                            <ul className='dropdown-list'>
                                <li className='dropdown-sub'>
                                    <a href="/#" className='dropdown-links'> electronics</a>
                                </li>
                                <li className='dropdown-sub'>
                                    <a href="/#" className='dropdown-links'>jewelery </a>
                                </li>
                                <li className='dropdown-sub'>
                                    <a href="/#" className='dropdown-links'> men's clothing </a>
                                </li>
                                <li className='dropdown-sub'>
                                    <a href="/#" className='dropdown-links'> women's clothing </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="filter-search">
                    <input type="text" id="searchInput" placeholder="Search Title" />
                    <button id="searchButton">Search</button>
                </div>

            </div>
        </>
    )
}

export default Filter


