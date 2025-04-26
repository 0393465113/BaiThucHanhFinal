import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './assets/componens/Header'
import Banner from './assets/componens/Banner'
import Navbar from './assets/componens/Navbar'
import BannerCarousel from './assets/componens/BannerCarousel'


function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header /> {/* Header xuất hiện ở tất cả các trang */}
      <Banner/>
      <Navbar/>
      <BannerCarousel/>
      <Routes>
        
      </Routes>
    </Router>
  )
}

export default App
