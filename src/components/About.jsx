import style from '../style.module.css'
import linkedin from '../assets/linkedin.png'
import linaperfil from '../assets/linaperfil.jpg'
import instagram from '../assets/instagram.png'

export default function About (){
  return (
    <div className={style['about']}>
      <div className={style['personal']}>
        <p>¿Quieres saber de mi?</p>

        <p>¡Perfecto!, soy Lina María Muñoz Mosquera</p>

        <p>Te resento mi proyecto integrador Rick and Morty. 
          Soy estudiante de Desarrollo Web FullStack en SoyHenry</p>
        
        <p>Te dejo un dato curioso:</p>
        <p>Mi profesion es la Fisioterapia pero aprender cosas nuevas nunca esta demás.</p>
        <a href="https://www.linkedin.com/in/linamuñozfisioterapeuta">
          <img src={linkedin} alt="" width="40px"/>
        </a>
        <a href="https://www.instagram.com/fisio.linamunoz/">
          <img src={instagram} alt="" width="40px" />
        </a>
      </div>
      <div className={style['personalImg']}>
        <img src={linaperfil} alt="" width="700px"/>
      </div>
    </div>
  )
}

