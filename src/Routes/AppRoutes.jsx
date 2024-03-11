import React, { useContext } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Deleteacount from '../components/Deleteacount'
import PlayerLogin from '../Components/players/PlayerLogin'
import PlayerSignup from '../Components/players/PlayerSignup'
import PlayerAbilitys from '../Components/players/PlayerAbilitys'
import PlayerContext from '../Components/context/playerContext'
import PlayerLevelAbilitys from '../Components/players/PlayerLevelAbilitys'
import PlayerEndSignup from '../Components/players/PlayerEndSignup'


const AppRoutes = () => {
    const {player}=useContext(PlayerContext)
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/deleteacount' element={<Deleteacount />} />
                <Route path='/playerSignup' element={<PlayerSignup/>} />
                <Route path='/playerAbilitys' element={<PlayerAbilitys/>} />
                <Route path='/playerLevelAbilitys' element={<PlayerLevelAbilitys/>}/>
                <Route path='/endPlayer' element={<PlayerEndSignup/>}/>
                <Route path='/playersLogin' element={<PlayerLogin/>}/>
                <Route path='*' element={<h1 className='text-4xl'>404 not found</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes