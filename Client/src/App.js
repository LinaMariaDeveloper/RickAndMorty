import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form'
import Favorites from './components/Favorites'
import Register from './components/Register.jsx'
import style from './style.module.css'

function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation()
   const location = useLocation()

   const routeName = pathname.match(/^\/\w*/)[0].replaceAll('/', '')
   let background = 'background-error'

   if (['', 'home', 'detail', 'about', 'favorites', 'register'].includes(routeName)) {
      background = 'background-general'
   }

   const [access, setAccess] = useState(false)
   const EMAIL = 'linamfisio@gmail.com';
   const PASSWORD = '1234lina';
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

   // FORMA DE LOGIN ANTES DE BACKEND - ANTES DE APLICAR EXPRESS:
   // async function login(userData){
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   // FORMA LOGIN ASYNC- AWAIT:
   async function login(userData) {
      const URL = 'http://localhost:3001/rickandmorty/login/'

      try {
         const { email, password } = userData
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;
         setAccess(access);
         if (access) {
            navigate("/home");
         }

         // setAccess(data.access);
         // access && navigate('/home');
      }
      catch (error) {
         window.alert('No existe el usuario')
      }
   }

   // FORMA LOGIN CON EXPRESS:
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/'
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   // Este hace validacion no permite pasar a otra pagina por la ruta en la barra
   // useEffect(() => {
   //    access ? navigate('/home')
   //       : navigate('/')
   // })

   const register = async (userData) => {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/register/";
      try {
        const { data } = await axios.post(URL, { email, password });
        const { access } = data;
        setAccess(access);
        if (access) navigate("/");
        alert("¡Usuario creado exitosamente!");
      } catch (error) {
        console.error(error);
      }
    };
  

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name) {
            const findCharacter = characters.find((element) => element.id === id)
            if (characters.length === 825) {
               window.alert('¡Ya no hay mas personajes para agregar!')
            } else if (findCharacter) {
               window.alert('¡Este personaje ya se encuentra en pantalla!')
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }
      } catch (error) {
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

   function onClose(id) {
      console.log(1, id)
      const updatedCharacters = characters.filter((character) => {
         return character.id !== id
      })
      setCharacters(updatedCharacters)
   }

   function randomCharacter() {
      let random = ((Math.random() * (826 - 1 + 1) + 1)).toFixed()
      onSearch(random)
   }

   function logout() {
      window.alert('Se cerrará sesión')
      setAccess(false)
      navigate('/')
      setCharacters([])
   }

   return (
      <div className={['App', style[background]].join(' ')}>
         {location.pathname !== "/" && (
            <Nav onSearch={onSearch} randomCharacter={randomCharacter} logout={logout}/>)}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/register" element={<Register register={register}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}


export default App;
