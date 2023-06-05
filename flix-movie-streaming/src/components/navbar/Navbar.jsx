import './navbar.scss'
import logo from './flix.png'
import Search from '@mui/icons-material/Search'
import Notifications from '@mui/icons-material/Notifications'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {window.onscroll = null};
  }
  
  return (
    <div className = {isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img
                src = {logo}
                alt = "logo"
                />
              <Link to = "/" className ="link">
            <span>Homepage</span>
            </Link>
            <Link to="/series" className ="link">
            <span>Series</span>
            </Link>
            <Link to="/movies" className="link">
            <span>Movies</span>
            </Link>
            <span>New and Popular</span>
            <span>My List</span>
            </div>
            <div className="right">
            <Search className = "icon" />
            <span>KID</span>
            <Notifications className = "icon" />
            <img src = 'https://th.bing.com/th/id/OIP.4oBn_yCg_ZvGg2ENIW8s9gHaDt?pid=ImgDet&rs=1' alt = ''/>
           <div className="profile">
            <ArrowDropDown className = "icon" />
              <div className = "options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar