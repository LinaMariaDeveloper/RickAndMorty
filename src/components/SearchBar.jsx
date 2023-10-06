import style from '../style.module.css'
import {useState} from 'react'

export default function SearchBar(props) {
   const [id, setId] = useState('')

   function handleChange(event){
      setId(event.target.value)
   }

   const handleClick = () => {
      props.onSearch(id)
      setId('')
   }

   return (
      <div className={style['searchBar']}>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={handleClick}>Agregar</button>
         <button onClick={(event) => {props.randomCharacter(id)}}>Random</button>
      </div>
   );
}
