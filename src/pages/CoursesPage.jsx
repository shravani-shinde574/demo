import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header' 
import Footer from '../components/Footer/Footer'
const CoursesPage  = () => {
    return(
        <div className="page-container" style={{overflow:"auto"}}>
      
              <h1 className="animate-fade-in-up"><i>Our Academic Programs</i></h1>

          <p>Vivekanand College offers a comprehensive range of undergraduate and
           postgraduate programs designed to equip students with the knowledge and
            skills demanded by today's dynamic global landscape. Our curriculum is 
            regularly updated to reflect industry trends and academic advancements.</p>
           <h2>Discover Campus Life</h2>
           <div>
           <video src = "/Videos/video.mp4" width="500" height="300" controls></video>
  
    <p>Get a glimpse of the vibrant academic and social life at Vivekanand College. </p>
    </div>
            <h2>Undergraduate Programs (UG)</h2> 
            <ol>
              <ul>
                <li><b><i>*Bachelor of Science (B.Sc.)*</i></b></li>
                <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                </ul>
                <li><b><i>*Bachelor of Commerce (B.Com)*</i></b></li>
                <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                </ul>
                <li><b><i>*Bachelor of Arts (B.A.)*</i></b></li>
                <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                </ul>
              </ul>
            </ol>
           <h2>Postgraduate Programs (PG)</h2>
            <ol>
              <ul>
                <li><b><i>*Master of Science (M.Sc.)*</i></b></li>
                  <ul>
                      <li>Computer Science (2 years)</li>
                      <li>Information Technology (2 years)</li>
                  </ul>
                <li><b><i>*Master of Commerce (M.Com)* (2 years)</i></b></li>
                <li><b><i>*Master of Arts (M.A.)* (2 years)</i></b></li>
              </ul>
            </ol>
            <table className="admissions-table course-details-table">
	            <tr>
	                    <th>Program Type</th>
	                    <th>Course Name</th>
	                    <th>Duration</th>
	                     <th>Annual Fee(INR)</th>
	                    <th>Eligibility</th>
	            </tr>
	            <tr>
	                    <td>UG</td>
	                    <td>B.Sc computer Science</td>
	                    <td>3 Years</td>
	                    <td>85,000</td>
	                    <td>10+2with PCM(50%)</td>
	            </tr>
	            <tr>
	                    <td>UG</td>
	                    <td>B.Com Accounting & Finance</td>
	                    <td>3 Years</td>
                        <td>70,000</td>
	                    <td>10+2commerce(45%)</td>
	            </tr>
	            <tr>
	                    <td>PG</td>
	                    <td>M.Sc Information Technology</td>
	                    <td>2 Years</td>
	                    <td>95,000</td>
	                    <td>B.Sc IT/CS(50%)</td>
	            </tr>
	        </table>

            <h2>Specialized & Vocational Courses</h2>
              <p>In addition to traditional degree programs, we offer various 
                 certificate and diploma courses in areas like Digital Marketing,
                 Web Development, Data Analytics, and Soft Skills Development,
                 providing specialized training for career enhancement.</p>
              <p><u>Have questions about a specific course?</u></p>
              <Link to="/contact" className="btn hero-btn">Inquire About Courses</Link>
            
        </div>
    )
}
export default CoursesPage
