function AvatarPopup() {
    return (
        <>
            <input id="avatar-link" data-input="avatar-link" type="url"
              className="form__input"
              placeholder="Ссылка на картинку" name="link" required/>
            <span id="avatar-link-error" className="form__input-error"></span>
        </>
  );
  }
  
  export default AvatarPopup;