import './Filter.css'
import { useEffect, useState } from 'react'
import { FaCaretDown, FaFilter } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProduct } from '../../Store/AllCategory'
import { Link } from 'react-router-dom'

const Filter = () => {
    const dispatch = useDispatch()
    const { dataAllCategory } = useSelector((state) => state.allCategoryProduct)
    const [openDropDown, setOpenDropDown] = useState(' ');
   
    useEffect(() => {
        dispatch(fetchAllCategoryProduct())
    }, [dispatch])

    //Toggle Dropdown
    const handleOpenDropDown = () => {
        setOpenDropDown((prevOpenDropDown) =>
            (prevOpenDropDown === '' ? 'active-dropdown-list' : '')
        );
    }
    return (
        <>
            <span className='filter-title'><FaFilter className='filter-icon' /> filter</span>
            <div id="filter-main">
                <div className="filter-dropdown" onClick={handleOpenDropDown}>
                    <span className='filter-dropdown-title'>filter by type</span>
                    <span className='filter-dropdown-icon'><FaCaretDown /></span>
                    <div id='dropdown-list' className={`dd-menu ${openDropDown}`}>
                        <div className="dropdown-items">
                            <ul className='dropdown-list'>
                                {
                                    dataAllCategory
                                    &&
                                    dataAllCategory.map((category) => (
                                        <li className='dropdown-sub' key={category}>
                                            <Link to={`/category/${category}`} className='dropdown-links'>{category}</Link>
                                        </li>
                                    ))
                                }



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


