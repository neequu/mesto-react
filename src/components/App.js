import React from 'react';

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import ProfilePopup from './ProfilePopup.js';
import AvatarPopup from './AvatarPopup.js';
import PlacePopup from './PlacePopup.js';


function App() {
  // hooks
  const [isProfilePopupOpen, setProfilePopupOpen] = React.useState(false)
  const [isPlacePopupOpen, setPlacePopupOpen] = React.useState(false)
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  // profile
  const handleEditProfileClick = () => {setProfilePopupOpen(!isProfilePopupOpen)}
  // place
  const handleAddPlaceClick = () => {setPlacePopupOpen(!isPlacePopupOpen)}
  // avatar
  const handleEditAvatarClick = () => {setAvatarPopupOpen(!isAvatarPopupOpen)}
  // selected card
  const handleCardClick = (card) => {
    setSelectedCard(card)
    setImagePopupOpen(!isImagePopupOpen)
  }
  // close popups
  const closeAllPopups = () => {
    setProfilePopupOpen(false)
    setPlacePopupOpen(false)
    setAvatarPopupOpen(false)
    setImagePopupOpen(false)
  }

  return (
<>
    <Header/>
    <Main 
      onEditProfile={handleEditProfileClick} 
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <Footer/>

    <PopupWithForm 
      isOpen={isProfilePopupOpen}
      onClose={closeAllPopups}
      name="profile"
      title="Редактировать профиль"
      children={<ProfilePopup/>}
    />

    <PopupWithForm 
      isOpen={isAvatarPopupOpen}
      onClose={closeAllPopups}
      name="avatar"
      title="Обновить аватар"
      children={<AvatarPopup/>}
    />

    <PopupWithForm 
      isOpen={isPlacePopupOpen}
      onClose={closeAllPopups}
      name="place"
      title="Новое место"
      children={<PlacePopup/>}
    />

    <ImagePopup
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      card={selectedCard}
    />

    {/* <PopupWithForm 
      // isOpen={isProfilePopupOpen}
      onClose={closeAllPopups}
      name="confirm"
      title="Вы уверены?"
    /> */}



  </>

    );
}

export default App;
