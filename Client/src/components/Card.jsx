import style from '../style.module.css'
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
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
      filtered,
   } = props

   const [isFav, setIsFav] = useState(false);
   const location = useLocation()

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
      filtered.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [filtered]);

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
               {!location.pathname.includes("/favorites") &&(
                  <button onClick={(event) => {onClose(id)}}>X</button>
               )}
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
     filtered: state.filtered,
   }
 };

 const mapDispatchToProps = (dispatch) => ({
   addFavorite: (character) => dispatch(addFavorite(character)),
   removeFavorite: (id) => dispatch(removeFavorite(id)),
 });
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);