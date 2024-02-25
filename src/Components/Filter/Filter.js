import './Filter.css'
import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategoryProduct } from '../../Store/AllCategory'
import { fetchAllProduct } from '../../Store/AllProduct'
import { searchInputValue } from '../../Store/searchProduct'
import { Link } from 'react-router-dom'

const Filter = () => {

    const dispatch = useDispatch()

    //Category Product
    const { dataAllCategory } = useSelector((state) => state.allCategoryProduct)
    //dropdown State
    const [openDropDown, setOpenDropDown] = useState(' ');
    //Toggle Dropdown
    const handleOpenDropDown = () => {
        setOpenDropDown((prevOpenDropDown) =>
            (prevOpenDropDown === '' ? 'active-dropdown-list' : '')
        );
    }
    //seach input handler
    const searchHandle = (e) => {
        dispatch(searchInputValue(e.target.value))
    }
    useEffect(() => {
        dispatch(fetchAllProduct())
        dispatch(fetchAllCategoryProduct())
    }, [dispatch])

    return (
        <>
            {/* <span className='filter-title'><FaFilter className='filter-icon' /> filter</span> */}
            <div id="filter-main" className='my-3'>
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
                    <label htmlFor="searchInput" id='search-input'>Search Product</label> <br/>
                    <input type="text" id="searchInput" placeholder="Search Product Title"
                        onChange={searchHandle}
                    />
                </div>

            </div>
        </>
    )
}

export default Filter


