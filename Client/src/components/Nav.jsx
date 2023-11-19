import style from '../style.module.css'
import SearchBar from './SearchBar'
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Nav(props) {
  const location = useLocation()

  return (
    <div className={style['nav']}>
      <img src={logo} alt="" width="180px" />
      <div>
        <Link to='/home'>
        {["/home", "/about", "/detail", "/favorites"].includes(location.pathname) &&(
          <button>Home</button>
        )}
        </Link>
        <Link to='/about'>
        {["/home", "/about", "/detail", "/favorites"].includes(location.pathname) &&(
          <button>About</button>
        )}
        </Link>
        <Link to='/favorites'>
        {["/home", "/about", "/detail", "/favorites"].includes(location.pathname) &&(
          <button>Favorites</button>
        )}
        </Link>
      </div>
      {["/home"].includes(location.pathname) &&(
        <SearchBar onSearch={props.onSearch} randomCharacter={props.randomCharacter}/>
      )}
      <Link to='/'>
        <button className={style['btn-logout']} onClick={(ev)=> props.logout()}>Log Out</button>
      </Link>
    </div>
  )
}