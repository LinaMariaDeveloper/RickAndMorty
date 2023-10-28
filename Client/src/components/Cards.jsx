import Card from './Card';
import rickandmorty from '../audio/rickandmorty.mp3';
import style from '../style.module.css'

export default function Cards(props) {
   const cards = []
   for (let character of props.characters){
      cards.push(<Card 
         key={character.id}
         id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
         />)
   }
   return (
   <div>
      {cards}
      <div className={style['audio']}>
         <audio src={rickandmorty} controls autoplay loop></audio>
      </div>
   </div>
   );
}
