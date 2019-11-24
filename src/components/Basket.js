import React from "react";
// Nous sommes sur la branche develop
// Nous sommes sur la branche derivee de develop FEATURE

const Basket = props => {
  const { basket, addInBasket } = props;
  let total = 0;

  if (basket.length > 0) {
    //on montre le panier lorsque qu'il y a au moins un element
    return (
      <div className="sectionBaskset">
        <div className="basket">
          <button>MANGER !! ET PAYER</button>
          {basket.map((element, index) => {
            total += Number(element.price) * Number(element.quantity);
            total = Math.floor(total * 100) / 100;
            return (
              <nav key={index}>
                <button
                  onClick={() => {
                    addInBasket(element.id, element.name, element.price, false);
                  }}
                >
                  +
                </button>
                <span>{element.quantity}</span>

                <button
                  onClick={() => {
                    addInBasket(element.id, element.name, element.price, true);
                  }}
                >
                  -
                </button>
                <span>{element.name}</span>
                <span>{element.price} €</span>
              </nav>
            );
          })}
          <div></div>
          <nav>
            <span>Sous-total</span>
            <span>{total} €</span>
          </nav>
          <nav>
            <span>Frais livraison</span>
            <span>2,50 €</span>
          </nav>
          <div></div>
          <nav>
            <h2>Total</h2>
            <h2>{total + 2.5} €</h2>
          </nav>
        </div>
      </div>
    );
  } else {
    // RIEN dans le panier
    return (
      <div className="sectionBasket">
        <div className="basket">
          <button className="boutongris">PAYER ! MANGER !!</button>
          <div className="paniervide">Panier vide</div>
        </div>
      </div>
    );
  }
};

export default Basket;
