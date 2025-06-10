import {Link} from "react-router-dom"
const Header = () => {
    return(
        <header className="main-header">
            <div className="college-name">
             <a href="/">Vivekanand college </a>   
            </div>

            <nav className="navbar desktop-nav">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admission">Admission</Link>
            <button type="button">Apply Now!</button>
            </nav>
        </header>
    )
}
export default Header