import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const HomePage = () => {
  return (
  

  <div>
    <div>

        <Header />
        <div>

            <img src ="\Images\college-banner.jpg"></img>
            <div>
            <h1><i>Welcome to Vivekanand College!</i></h1>
            <p><i>your journey to excellence starts here.</i></p>
             <a href='/admission' className='box'><u>Apply Now!</u></a>
        </div>
        </div>
  <p>**Vivekanand College** is a premier educational institution
      dedicated to fostering academic excellence, innovation,and holistic development.
      Established in [Year of Establishment, e.g., 1980], we have proudly served generations
      of students, empowering them to achieve their full potential.</p>
  <p>At Vivekanand College, we believe in a vibrant learning environment that 
      extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse
      student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
      </ul>  
      <h2>Campus Life & Facilities</h2>
      <img src ="/Images/students-studying.jpg"></img>
      <img src ="/Images/campus-life.jpg"></img>
    <p>Explore our vibrant campus and state-of-the-art facilities designed
        to enhance your learning experience and personal growth.</p>  
        <p>Ready to explore our courses?</p>
        <a href='/courses'>Explore Courses</a>
        <Footer />
  </div>
  </div>
     
  )
}

export default HomePage