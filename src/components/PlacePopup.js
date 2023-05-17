import PopupWithForm from './PopupWithForm.js'

function PlacePopup(props) {
    const {isOpen, onClose} = props
    return (
        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={isOpen}
          onClose={onClose}
          buttonText="Создать"
        >
            <input 
              id="place-title" 
              data-input="place-name" 
              type="text"
              className="form__input"
              placeholder="Название" 
              name="name" 
              required 
              minLength="2"
              maxLength="30"
            />
            <span 
              id="place-title-error" 
              className="form__input-error"
            >
            </span>
            <input 
              id="place-link" 
              data-input="place-link" 
              type="url"
              className="form__input"
              placeholder="Ссылка на картинку" 
              name="link" 
              required
            />
            <span 
              id="place-link-error" 
              className="form__input-error"
            >
            </span>
        </PopupWithForm>
  );
  }
  
  export default PlacePopup;