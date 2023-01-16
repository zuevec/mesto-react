import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (obj) => {
    setIsImageOpen(true);
    setSelectedCard(obj);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnText={'Сохранить'}
      >
        <input
          className="popup__input popup__input_name_name"
          name="name"
          id="name-input"
          type="text"
          minLength="2"
          maxLength="40"
          defaultValue=""
          placeholder="Имя"
          required
        />
        <span className="popup__placeholder name-input-placeholder"></span>
        <input
          className="popup__input popup__input_name_job"
          name="job"
          id="job-input"
          type="text"
          minLength="2"
          maxLength="200"
          defaultValue=""
          placeholder="Работа"
          required
        />
        <span className="popup__placeholder job-input-placeholder"></span>
      </PopupWithForm>
      <PopupWithForm
        title={'Новое место'}
        name={'place'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        btnText={'Сохранить'}
      >
        <input
          className="popup__input popup__input_name_mesto"
          name="name"
          id="mesto-input"
          type="text"
          minLength="2"
          maxLength="30"
          defaultValue=""
          placeholder="Название"
          required
        />
        <span className="popup__placeholder mesto-input-placeholder"></span>
        <input
          className="popup__input popup__input_name_linkImg"
          name="link"
          id="linkImg-input"
          type="url"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__placeholder linkImg-input-placeholder"></span>
      </PopupWithForm>
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        isImageOpen={isImageOpen}
      />
      <PopupWithForm
        title={'Вы уверены?'}
        name={'confirm'}
        btnText={'Да'}
      ></PopupWithForm>
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText={'Сохранить'}
      >
        <fieldset className="popup__set">
          <input
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку"
            className="popup__input"
            required
          />
          <span id="avatar-error" className="popup__input-error"></span>
        </fieldset>
      </PopupWithForm>
    </div>
  );
}

export default App;
