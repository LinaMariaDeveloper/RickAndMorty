import style from '../style.module.css'
import ingresar from '../assets/ingresar.gif'
import { useState } from 'react'
import validate from '../utils/validation';

export default function Form (props){
  const [userData, setData] = useState({
    email:"",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: ""})
 
  function handleChange (event){
    setData({
      ...userData, [event.target.name]: event.target.value
    })

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    )
  }

  function handleSubmit(e) {
    e.preventDefault(props.login(userData))
  }

  return (
    <div className={style['form-general']}>
          <form  className={style['form']}>
            <img src={ingresar} alt='' width='300px'/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && (
              <h5 style={{color:'white'}}>
                <span>{errors.email}</span>
              </h5>
            )}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && (
              <h5 style={{color:'white'}}>
                <span>{errors.password}</span>
              </h5>
            )}
            <button type="submit" onClick={handleSubmit}>Login</button>
          </form>
    </div>
  )
};
