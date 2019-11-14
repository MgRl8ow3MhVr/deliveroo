import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Categorie from "./components/Categorie";
import Basket from "./components/Basket";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [basket, setBasket] = useState([]);

  // On fera passer addInBasket aux DISHES et au BASKET
  const addInBasket = (id, name, price, remove) => {
    //Recherche si l'item est déjà existant
    let index = 0;
    let basketCopy = [...basket];
    while (
      basket.length !== 0 &&
      index !== basket.length &&
      id !== basket[index].id
    ) {
      index++;
    }
    if (index === basket.length) {
      //l'item etait pas present donc i=basket.length
      //donc on ajoute l'item dans le basket
      // Egalement si le basket est vide
      basketCopy.push({ id: id, name: name, price: price, quantity: 1 });
    } else {
      //l'item etait present a la position index.

      if (!remove) {
        //Ici c'est un Ajout. on incremente la quantite
        basketCopy[index].quantity++;
      } else {
        //ici c'est un retrait incremente sa quantite
        if (basketCopy[index].quantity === 1) {
          // ici quantite 0 on retire l'objet
          basketCopy.splice(index, 1);
        } else {
          // ici on decrement la quantite seulement
          basketCopy[index].quantity--;
        }
      }
    }
    setBasket(basketCopy);
  };

  const fetchData = async () => {
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Logo />
      {data ? <Header {...data.restaurant} /> : <div>loading</div>}

      {data && (
        <main className="contentAndBasket">
          <section className="content">
            {Object.keys(data.menu).map((categorie, index) => {
              if (data.menu[categorie].length) {
                return (
                  <div key={index}>
                    <h2>{categorie}</h2>
                    <Categorie
                      categorieData={data.menu[categorie]}
                      addInBasket={addInBasket}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </section>
          <Basket basket={basket} addInBasket={addInBasket} />
        </main>
      )}
    </div>
  );
}

export default App;
