import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img alt="charImage" src={`${props.character.image}`} />
    <h2>{props.character.name}</h2>
    <p>Origin: {props.character.location.name}</p>
  </div>
);
