import React from 'react';

const ImagePopup = ({ onClose, card, isImageOpen }) => {
    return (
<div className={`popup popup_picture ${isImageOpen ? 'popup_opened' : null}`} id="popup_image">
<div className="popup__block-image">
  <button className="popup__close" id="image_close" aria-label="Close" onClick={onClose}></button>
  <figure>
    <img src={card.link} alt="Описание фотки в попапе" className="popup__image" />
    <figcaption className="popup__caption"></figcaption>
  </figure>
</div>
</div>
    );
};

export default ImagePopup;