import React from 'react';

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

import ImagePopup from './ImagePopup.js'
import ProfilePopup from './ProfilePopup.js'
import AvatarPopup from './AvatarPopup.js'
import PlacePopup from './PlacePopup.js'
import ConfirmPopup from './ConfirmPopup.js';

import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  // hooks
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
  const [isPlacePopupOpen, setPlacePopupOpen] = React.useState(false)
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})

  const [currentUser , setCurrentUser ] = React.useState({})
  const [cards, setCards] = React.useState([]) 
  const [deletingCard, setDeletingCard] = React.useState({})


  React.useEffect(() => {
    const fetchData = async () => {
      const [initialCards, userData] = await Promise.all([api.getInitialCards(), api.getUserInfo()])
      setCurrentUser(userData)
      setCards(initialCards)
    }
  
    fetchData()
      .catch(err => console.log(`Ошибка: ${err}`))
  }, [])

  // profile
  const handleEditProfileClick = () => {setProfilePopupOpen(!isProfilePopupOpen)}
  // place
  const handleAddPlaceClick = () => {setPlacePopupOpen(!isPlacePopupOpen)}
  // avatar
  const handleEditAvatarClick = () => {setAvatarPopupOpen(!isAvatarPopupOpen)}

  // close popups
  const closeAllPopups = () => {
    setProfilePopupOpen(false)
    setPlacePopupOpen(false)
    setAvatarPopupOpen(false)
    setImagePopupOpen(false)
    setConfirmPopupOpen(false)
    setSelectedCard({});
  }
    // selected card
  const handleCardClick = async (card) => {
    setSelectedCard(card)
    await new Promise(res => setTimeout(res, 150))
    setImagePopupOpen(true)
  }

  const handleCardLike = async (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    const res = await api.changeLikeCardStatus(card._id, isLiked)
    setCards(state => state.map(c => c._id === card._id ? res : c))
  } 

  const handleCardDelete = async () => {
    try {
      await api.deleteCard(deletingCard._id)
      setCards(state => state.filter(c => c._id !== deletingCard._id))

    } catch (e) {
      console.log(e)
    }
  }

  const handleCardDeleteReq = card => {
    setConfirmPopupOpen(true)
    setDeletingCard(card)
  }

  const handleUpdateUser = async (user) => {
    try {
      const res = await api.editUserInfo(user)
      setCurrentUser(res)
      closeAllPopups()
    } catch (e) {
      console.log(e)
    }
  }

  const handleUpdateAvatar = async (a) => {
    try {
      const res = await api.editAvatar(a)
      setCurrentUser(res)
      closeAllPopups()
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddPlace = async place => {
    try {
      const res = await api.addCard(place)
      setCards([res, ...cards])
      closeAllPopups()
    } catch (e) {
      console.log(e)
    }
  }

  return (
  <>
    <CurrentUserContext.Provider value={currentUser}>
    <Header/>
    <Main 
      onEditProfile={handleEditProfileClick} 
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDeleteReq={handleCardDeleteReq}
    />
    <Footer/>

    <ProfilePopup 
      isOpen={isProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
    />

    <AvatarPopup 
      isOpen={isAvatarPopupOpen}
      onClose={closeAllPopups}
      onUpdateAvatar={handleUpdateAvatar}
    />

    <PlacePopup 
      isOpen={isPlacePopupOpen}
      onClose={closeAllPopups}
      onAddPlace={handleAddPlace}
    />

    <ImagePopup
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      card={selectedCard}
    />
    <ConfirmPopup
      isOpen={isConfirmPopupOpen}
      onClose={closeAllPopups}
      onSubmit={handleCardDelete}
    />
    </CurrentUserContext.Provider>
  </>

  );
}

export default App;
