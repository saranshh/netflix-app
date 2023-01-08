import React from 'react';

function Card(props) {
  return (
    <div className="cards">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} rel="noreferrer" target="_blank" className="btn">
            <button>Watch Now</button>
          </a>
        </div>
    </div>
  );
}

export default Card;
