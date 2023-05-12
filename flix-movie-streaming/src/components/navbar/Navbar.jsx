import './navbar.scss'
import logo from './flix.png'
const Navbar = () => {
  return (
    <div className = "navbar">
        <div className="container">
            <div className="left">
                <img
                src = {logo}
                alt = "logo"
                />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            </div>
            <div className="right"></div>
    
        </div>
    </div>
  )
}

export default Navbar