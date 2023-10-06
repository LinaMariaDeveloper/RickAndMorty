import style from '../style.module.css'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Nav(props) {
  return (
    <div className={style['nav']}>
      <img src={logo} alt="" width="180px" />
      <div>
        <Link to='/home'>
          <button>Home</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
        <Link to='/favorites'>
          <button>Favorites</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} randomCharacter={props.randomCharacter}/>
      <Link>
        <button className={style['btn-logout']} onClick={(event) => {props.logOut()}}>Log Out</button>
      </Link>
    </div>
  )
}