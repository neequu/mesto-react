import PopupWithForm from './PopupWithForm.js'

function ProfilePopup(props) {
  return (
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText="Сохранить"
      >
        <input 
          id="name" 
          data-input="profile-name" 
          type="text"
          className="form__input"
          placeholder="Ваше имя" 
          name="name" 
          required 
          minLength="2"
          maxLength="40"
        />
        <span 
          id="name-error" 
          className="form__input-error"
        >
          заполнитеполе
        </span>
        <input 
          id="about" 
          data-input="profile-about" 
          type="text"
          className="form__input"
          placeholder="О себе" 
          name="about" 
          required
          minLength="2"
          maxLength="200"
        />
        <span 
          id="about-error" 
          className="form__input-error"
        >
        </span>
    </PopupWithForm>
  );
  }
  
  export default ProfilePopup;