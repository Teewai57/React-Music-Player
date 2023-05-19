import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import Feed from '../Feed/Feed'
import Library from '../Library/Library'
import Player from '../Player/Player'
import Trending from '../Trending/Trending'
import "./Home.css";
import Sidebar from '../../components/sidebar/Sidebar'
import Login from '../auth/login'

function Home() {
  return (
    <Router>
        <div className="main-body">
          <Login />
            {/* <Sidebar />
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes> */}
        </div>
    </Router>
  )
}

export default Home
