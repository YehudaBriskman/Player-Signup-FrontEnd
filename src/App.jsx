import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useState, useEffect } from 'react'
import PlayerContext from './Components/context/playerContext'


function App() {
  const [player, setPlayer] = useState({})

  useEffect(() => {
    console.log("player: ", player)
  }, [player])


  return (
    <PlayerContext.Provider value={{
      player,
      setPlayer
    }}>

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </PlayerContext.Provider>
  )
}

export default App
