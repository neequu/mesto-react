function Card(props) {

  const handleCardClick = () => {
    props.onCardClick(props.card)
}

  return (
    <article className="element">
        <button className="element__delete-button" data-button="delete"></button>
        <img onClick={handleCardClick} className="element__image" src={props.card.link}
        alt={props.card.name}/>
        <div className="element__info">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like-container">
            <button type="button" data-button="like"
            className="element__like"></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
        </div>
    </article>

    );
}

export default Card;