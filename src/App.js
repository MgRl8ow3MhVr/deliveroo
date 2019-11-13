import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Categorie from "./components/Categorie";

import "./App.css";

function App() {
  const [data, setData] = useState(null);

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
        <section className="content">
          {Object.keys(data.menu).map(categorie => {
            if (data.menu[categorie].length) {
              return (
                <>
                  <h2>{categorie}</h2>

                  <Categorie categorieData={data.menu[categorie]} />
                </>
              );
            } else {
              return null;
            }
          })}
        </section>
      )}

      {/* //fin de div App */}
    </div>
  );
}

export default App;
