import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Favorites from './Favorites'
import Feed from './Feed'
import Library from './Library'
import Player from './Player'
import Trending from './Trending'

function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    </Router>
  )
}

export default Home
