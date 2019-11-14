import React from "react";
import Dishes from "./Dishes";

const Categorie = props => {
  const { categorieData, addInBasket } = props;
  return (
    <>
      <section className="categorie">
        {Object.keys(categorieData).map(dish => {
          return (
            <Dishes
              key={categorieData[dish].id}
              {...categorieData[dish]}
              addInBasket={addInBasket}
            />
          );
        })}
      </section>
    </>
  );
};

export default Categorie;
