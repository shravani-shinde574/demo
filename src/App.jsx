// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import HomePage from './pages/HomePage'
import "./App.css"
import Header from './components/Header/Header'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import { useState } from 'react'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'
import Footer from './components/Footer/Footer'
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Shravani Sandeep Shinde"
          studentPhotoUrl="\Images\img.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <div className="main-layout">
          <Header/>
          <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage/>}/>
             <Route path="/courses" element={<CoursesPage/>}/>
               <Route path="/contact" element={<ContactPage/>}/>
                 <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
        </div>
         <ChatbotComponent/>
        <Footer/>
        </div>
      </Router>
      </>
  )
}

export default App