function PopupImage(props) {
    return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`} id="popup-image">
      <div className="popup__expanded-image-container">
      <button type="button" className="popup__close-button"
          data-button="close" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img src={props.card.link} id="popup-img" className="popup__img"/>
          <figcaption id="popup-caption" className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  
      );
  }
  
  export default PopupImage;