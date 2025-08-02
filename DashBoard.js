import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

const DashBoard = () => {
    const location = useLocation();


   
    return (
        <div className='dashboad-wrapper'>
            <div className='side-nav'>
                <div className='profile-box'>
                    <div className='profile-pic'>
                        <img alt='profile-pic' src={require("../assets/books.jpeg")}></img>
                    </div>
                    <div className='profile-text'>
                        <h3> Hello pintu</h3>
                        <button>Logout</button>
                    </div>
                </div>
                <div className='link-box'>
                    <Link to={'/DashBoard/Home'} className={location.pathname === '/DashBoard/Home' ? 'link-Active-link' : 'link-bar'}><i className="fa-solid fa-house"></i>Home</Link>
                    <Link to={'/DashBoard/My-cource'} className={location.pathname === '/DashBoard/My-cource' ? 'link-Active-link' : 'link-bar'}><i className="fa-solid fa-book-open-reader"></i> My Cource</Link>
                    <Link to={'/DashBoard/Add-cource'} className={location.pathname === '/DashBoard/Add-cource' ? 'link-Active-link' : 'link-bar'}> <i className="fa-solid fa-plus"></i> Add New Cource</Link>
                </div>

            </div>
            <div className='main-containt'>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default DashBoard
