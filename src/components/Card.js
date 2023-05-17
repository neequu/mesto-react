function Card(props) {
  const {name, link, likes} = props.card
  const handleCardClick = () => {
    props.onCardClick(props.card)
}

  return (
    <article className="element">
        <button className="element__delete-button" data-button="delete"></button>
        <img onClick={handleCardClick} className="element__image" src={link}
        alt={name}/>
        <div className="element__info">
        <h2 className="element__heading">{name}</h2>
        <div className="element__like-container">
            <button type="button" data-button="like"
            className="element__like"></button>
            <p className="element__like-counter">{likes.length}</p>
        </div>
        </div>
    </article>

    );
}

export default Card;