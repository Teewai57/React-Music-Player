import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
        </Routes>
    </Router>
  )
}

export default Home
