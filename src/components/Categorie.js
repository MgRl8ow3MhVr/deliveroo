import React from "react";
import Dishes from "./Dishes";

const Categorie = props => {
  const categorieData = props.categorieData;
  return (
    <>
      <section className="categorie">
        {Object.keys(categorieData).map(dish => {
          return (
            <Dishes key={categorieData[dish].id} {...categorieData[dish]} />
          );
        })}
      </section>
    </>
  );
};

export default Categorie;
