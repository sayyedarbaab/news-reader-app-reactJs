import style from "./Navbar.module.css";
//problem solve
// import { BrowserRouter as Router,Link} from 'react-router-dom'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <h1>Nitin Gadkari</h1>
        </div>
        {/* <Router> */}
        <ul>
          <Link to="/" className={style.link}>
            <h4>Home</h4>
          </Link>
          <Link to="/cricket_news" className={style.link}>
            <h4>About</h4>
          </Link>
          <Link to="/Education_news" className={style.link}>
            <h4>Media</h4>
          </Link>
          <Link to="/Politics_news" className={style.link}>
            <h4>Contact</h4>
          </Link>
        </ul>
        <Link to="/LoginPage">
          <button className={style.btn}>login</button>
        </Link>
        {/* </Router> */}
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
