import React, {useContext} from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";

const Card = ({ image, likesCount, title, onCardClick, card, onCardLike, onCardDelete }) => {
        const user = useContext(CurrentUserContext)

        const isOwn = card.owner._id !== '4dceaf156f5bc6540a9f4a97';
        
        const isLiked = card.likes.some(i => i._id === user._id);
        const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`
        
    return (
        <div 
        className={`element ${card._id}`}
         key={card._id}>
            {isOwn ? null : <button type="button" className="element__trash" onClick={() => {
                onCardDelete(card)
       }}></button>}
            <img src={image} alt={title} className="element__image" onClick={() => onCardClick(card)} />
            
            <h2 className="element__title">{title}</h2>
            <div className="element__likes">
            <button type="button" className={cardLikeButtonClassName} onClick={() => {
                        onCardLike(card)
                    }}></button>
                <p className="element__like-count">{likesCount}</p>
                
            </div>
        </div>
    );
};




export default Card;