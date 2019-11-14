import React from "react";
import Star from "./StarSvg";

const Dishes = props => {
  const { addInBasket } = props;
  // const addInBasket = props.addInBasket;
  // note : ici props est tout l'objet Repas avec ses proprietes.
  // mais on y ajoute basket et Setbasket sans probleme
  return (
    <div
      className="dishes"
      onClick={() => {
        addInBasket(props.id, props.title, props.price);
      }}
    >
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
