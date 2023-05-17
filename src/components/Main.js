import React from 'react';
import loadingImage from '../images/profile/loading.gif'
import api from '../utils/api'
import Card from './Card.js'

function Main(props) {
  const [user, setUser] = React.useState({})
  const [cards, setCards] = React.useState([])

React.useEffect(
  () => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([initialCards, userData]) => {
        setUser(userData)
        setCards(initialCards)
      })
      .catch(err => console.log(`Ошибка:${err}`))
  }, [])

  const {onEditAvatar, onEditProfile, onAddPlace, onCardClick} = props
  
return (
  <main className="main">
    <section className="profile">
      <div className="profile__avatar-container" id="change-avatar" onClick={onEditAvatar}>
        <img id="profile-avatar" className="profile__avatar" src={user.avatar ? user.avatar : loadingImage}
        alt="фотография профиля"/>
      </div>

      <div className="profile__info">

        <div className="profile__person-info">
          <div className="profile__flex-group">
            <h1 id="profile-name" className="profile__name">{user.name}</h1>
            <button id="profile-edit-button" className="profile__edit-button"
              type="button" data-button="popup-open" onClick={onEditProfile}></button>
          </div>
          <p id="profile-about" className="profile__about">{user.about}</p>
        </div>

        <button className="profile__add-button" type="button"
          id="new-place-button" data-button="popup-open" onClick={onAddPlace}></button>
      </div>
    </section>


    <section className="elements" id="elements" aria-label="сетка из изображений">
        {cards.map(card => (
          <Card 
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
    </section>
  </main>
  
      );
  }
  
  export default Main;