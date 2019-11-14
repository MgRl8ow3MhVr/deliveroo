import React from "react";

const Header = props => {
  return (
    <header>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description} </p>
      </div>
      <picture>
        <img src={props.picture} alt="imgheader"></img>
      </picture>
    </header>
  );
};

export default Header;
