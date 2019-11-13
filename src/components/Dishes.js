import React from "react";
import Star from "./StarSvg";

const Dishes = props => {
  return (
    <div className="dishes">
      <nav>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div>
          <span>{props.price} €</span>
          {props.popular && (
            <>
              <Star />
              <h4>populaire</h4>
            </>
          )}
        </div>
      </nav>
      {props.picture && (
        <>
          <picture>
            <img src={props.picture} alt="img"></img>
          </picture>
        </>
      )}
    </div>
  );
};

export default Dishes;
