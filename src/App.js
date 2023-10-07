import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form'
import Favorites from './components/Favorites'
import style from './style.module.css'
import { useDispatch } from "react-redux";
import { removeFavorite } from './redux/actions';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation()
   const location = useLocation()

   const routeName = pathname.match(/^\/\w*/)[0].replaceAll('/', '')
   let background = 'background-error'

   if(['', 'home', 'detail', 'about', 'favorites'].includes(routeName)) {
      background = 'background-general'
   }

   const [access, setAccess] = useState(false)
   const EMAIL = 'linamfisio@gmail.com';
   const PASSWORD = 'lina123';
   const navigate = useNavigate()

   //FORMA onSearch antes de axios:
   // function onSearch(){
   //    const person = {
   //       id: 1,
   //       name: 'Rick Sanchez',
   //       status: 'Alive',
   //       species: 'Human',
   //       gender: 'Male',
   //       origin: {
   //          name: 'Earth (C-137)',
   //          url: 'https://rickandmortyapi.com/api/location/1',
   //    },
   //       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   //    }
   //    setCharacters([...characters, person])
   // }
   async function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)

         if (data.name) {
            const findCharacter = characters.find((element) => element.id === parseInt(id))
            if (characters.length === 825) {
               window.alert('¡Ya no hay mas personajes para agregar!')
            } else if (findCharacter) {
               window.alert('¡Este personaje ya se encuentra en pantalla!')
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }
      } catch (error) {
         console.log(error.response)
         if (error.response && error.response.status === 404) {
            window.alert('¡No hay personajes con este ID!')
         } else {
            window.alert('¡error no determinado!')
         }
      }

      //FORMA SINCRONA
      // .then(({ data }) => {
      //    if (data.name) {
      //       const findCharacter = characters.find((element) => element.id === parseInt(id))
      //       if(findCharacter){
      //          window.alert('¡Este personaje ya se encuentra en pantalla!')
      //       } else {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       }
      //    }
      //    else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });
   }

   const dispatch = useDispatch();

   function onClose(id) {
      const updatedCharacters = characters.filter((character) => character.id !== parseInt(id))
      setCharacters(updatedCharacters)
      dispatch(removeFavorite(id));
   }

   function randomCharacter() {
      let random = ((Math.random() * (826 - 1 + 1) + 1)).toFixed()
      onSearch(random)
   }

   function logOut (){
      setAccess(false)
      navigate('/')
      setCharacters([])
   }

   return (
      <div className={['App', style[background]].join(' ')}>
         {location.pathname !== "/" &&(
            <Nav onSearch={onSearch} randomCharacter={randomCharacter} logOut={logOut} />)}
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}


export default App;
