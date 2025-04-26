import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './assets/componens/Header'


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
      <Routes>
      </Routes>
    </Router>
  )
}

export default App
