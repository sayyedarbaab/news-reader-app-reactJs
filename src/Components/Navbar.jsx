import style from './Navbar.module.css'
//problem solve
// import { BrowserRouter as Router,Link} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function Navbar(){

    return(
        <div className={style.container}>
        <nav className={style.nav}>
            <div className={style.logo}>
            <h1>Latest News</h1>
            </div>
            {/* <Router> */}
            <ul>
                <Link to='/' className={style.link}><h4>Home</h4></Link>
                <Link to='/cricket_news' className={style.link}><h4>Cricket</h4></Link>
                <Link to='/Education_news' className={style.link}><h4>Education</h4></Link>
                <Link to='/Politics_news' className={style.link}><h4>Politics</h4></Link>
            </ul>
            <Link to='/LoginPage'><button className={style.btn}>login</button></Link>
            {/* </Router> */}
        </nav>
        <Outlet />
        </div>
    )
}

export default Navbar