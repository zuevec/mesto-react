import React, { useEffect, useState } from 'react';
import { api } from "../utils/Api";
import Card from "./Card";
const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    try {
      const res = await api.getCardList();
      setCards(res);
    } catch (e) {
      console.warn(e)
    }
  }
  const fetchData = async () => {
    try {
      const res = await api.getUserInfo();
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    } catch (e) {
      console.warn(e)
    }
  }
  useEffect(() => {
    fetchData();
    fetchCards();
  }, [])
  return (
    <>
      <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img src={userAvatar} alt="Аватарка фотографа" className="profile__avatar"  />
          <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
        
        <div className="profile__text">
          <h1 className="profile__name">{userName ?? 'Жак Ив Кусто'} </h1>
          <button className="profile__edit" type="button" onClick={onEditProfile} />
          <p className="profile__job">{userDescription ?? 'Frontend developer'}</p>
        </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace} />
      </section>

      <section className="elements">
        {
          cards.map((card) => <Card card={card} key={card._id} title={card.name} image={card.link} likesCount={card.likes.length} onCardClick={onCardClick} />)
        }
      </section>

      </main>
    </>
  );
};
export default Main;