function ProfilePopup() {
    return (
        <>
            <input id="name" data-input="profile-name" type="text"
              className="form__input"
              placeholder="Ваше имя" name="name" required minLength="2"
              maxLength="40"/>
            <span id="name-error" className="form__input-error">заполните
              поле</span>
            <input id="about" data-input="profile-about" type="text"
              className="form__input"
              placeholder="О себе" name="about" required
              minLength="2"
              maxLength="200"/>
            <span id="about-error" className="form__input-error"></span>
        </>
  );
  }
  
  export default ProfilePopup;