import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='bg-gradient-to-r from-blue-500 to-purple-500 '>
                <nav className='p-4 d-flex justify-content-end'>
                    <div className='p-4 d-flex ms-auto'>
                        <Link className='text-white mx-3' to="/">HOME</Link>
                        <Link className='text-white mx-3' to="/signup">SIGNUP</Link>
                        <Link className='text-white mx-3' to="/login">LOGIN</Link>
                        <Link className='text-white mx-3' to="/deleteacount">DELETE ACOUNT</Link>
                        <Link className='text-white mx-3' to="/playerSignup">PLAYERS</Link>
                    </div>
                </nav>
            </header>
            <div className='bg-gradient-to-r from-black via-slate-800 to-gray-500 text-white p-4 px-8'>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar