import PopupWithForm from './PopupWithForm.js'

function AvatarPopup(props) {
    const {isOpen, onClose} = props
    return (
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isOpen}
          onClose={onClose}
          buttonText="Сохранить"
        >
            <input 
              id="avatar-link" 
              data-input="avatar-link" 
              type="url"
              className="form__input"
              placeholder="Ссылка на картинку" 
              name="link" 
              required
            />

            <span 
              id="avatar-link-error" 
              className="form__input-error"
            >
            </span>
        </PopupWithForm>
  );
  }
  
  export default AvatarPopup;