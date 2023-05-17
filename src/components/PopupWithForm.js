function PopupWithForm(props) {
    return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={`popup-${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button"
          data-button="close" onClick={props.onClose}></button>
        <h3 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h3>
        <form name={`form-${props.name}`} id={`${props.name}-form`} className="form popup__form">
          <fieldset className="form__set">
            {props.children}
            <button type="submit" className="form__submit-button">Сохранить</button>
          </fieldset>
        </form>
       </div>
    </div>
  
      );
  }
  
  export default PopupWithForm;