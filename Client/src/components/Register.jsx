import { useState } from 'react'
import validation from '../utils/validation'
import style from '../style.module.css'

const RegisterForm = ({register}) => {
  const [userData, setData] = useState({
    email:'',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const handleChange = (event) =>{
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value
      })
    )
    
    setData({
      ...userData,
      [event.target.name]: event.target.value,
    }) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    register(userData);
  };

  return (
    <div className={style['form-general']}>
          <form  className={style['form']}>
            <h2 className={style['register']}>Register</h2>
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
            <button type="submit" onClick={handleSubmit}>Send</button>
          </form>
    </div>
  )
}

export default RegisterForm;
