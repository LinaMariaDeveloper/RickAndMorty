import style from '../style.module.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from "../redux/actions";
import { connect } from "react-redux";

const Card = function (props) {
   const {
      onClose,
      name,
      species,
      gender,
      origin,
      image,
      id,
      addFavorite,
      removeFavorite,
      myFavorites,
   } = props

   const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFavorite(id);
      } else {
        addFavorite({
         onClose,
         name,
         species,
         gender,
         origin,
         image,
         id,
        })
        setIsFav(true)
      }
    };

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style['card']}>
         <div className={style['header']}>
            <div className={style['name']}>
               <Link to={`/detail/${id}`}>
               <span>{name}</span>   
               </Link>
               {isFav ? ( 
                  <button className={style['button-fav']} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style['button-fav']} onClick={handleFavorite}>🤍</button>
            )}
               <button onClick={(event) => {onClose(id)}}>X</button>
            </div>
            <div className={style['info']}>
               <div>{species}</div>
               <div>{gender}</div>
            </div>
         </div>
         <img src={image} alt='' />
         <div className={style['origin']}>
            {origin}
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites,
   }
 };
 
export default connect(mapStateToProps, {addFavorite, removeFavorite})(Card);