import React from 'react';



const Card = ({ image, myKey, title, likesCount, onCardClick, card }) => {
    return (
        <div className="element" key={myKey}>
            <button type="button" className="element__trash"></button>
            <img src={image} alt={title} className="element__image" onClick={() => onCardClick(card)} />
            <h2 className="element__title">{title}</h2>
            <div className="element__likes">
                <button type="button" className="element__like"></button>
                <p className="element__like-count">{likesCount}</p>
            </div>
        </div>
    );
};

export default Card;