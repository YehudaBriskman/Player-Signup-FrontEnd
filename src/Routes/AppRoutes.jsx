import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
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