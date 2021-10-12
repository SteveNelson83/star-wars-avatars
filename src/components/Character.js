import React from "react";
import Avatar from "react-nice-avatar";
import "../styles.css";

const Characters = (character) => {
  
	let hairColors = {
		"none": "",
		"black": "black",
		"brown": "brown",
		"blond": "gold",
		"auburn": "orange",
		"white": "white",
		"grey": "grey",
		"n/a": ""
	}

  let skinColors = {
    "fair": "pink",
		"gold": "goldenrod",
		"white": "white",
		"light": "sandybrown",
		"green": "green",
		"green-tan": "lime",
		"pale": "white",
		"brown mottle": "brown",
    "orange": "orange",
		"dark": "brown",
		"red": "red",
		"blue": "blue",
		"tan": "tan",
		"yellow": "yellow",
		"grey": "grey",
    "metal": "darkslategrey"
  }

  let hairStyles = {
    "male": "normal",
		"female": "womanShort",
		"n/a": "mohawk"
  }

  const config = {
    sex: character.gender,
    faceColor: skinColors[character.skin_color.split(",")[0]],
    earSize: "big",
    hairColor: hairColors[character.hair_color.split(",")[0]],
    hairStyle: hairStyles[character.gender],
    hatStyle: character.hair_color === "none" || character.hair_color === "n/a" ? "beanie" : "none",
    hatColor: "black",
    eyeStyle: "circle",
    glassesStyle: "none",
    noseStyle: "long",
    mouthStyle: "laugh",
    shirtStyle: "hoody",
    shirtColor: "white",
    bgColor: "skyblue",
  };

  const films = {
    "1": "The Phantom Menace",
    "2": "Attack of the Clones",
    "3": "Revenge of the Sith",
    "4": "A New Hope",
    "5": "The Empire Strikes Back",
    "6": "Return of the Jedi"
  }

  let filmArray = [];
  character.films.forEach((film) => {
    filmArray.push(film.split('/', 6).pop());
  })

  return (
    <div className="card">
      <div className="cardLeft">
        <h1>{character.name}</h1>
        <Avatar style={{ width: "200px", height: "200px" }} {...config} />
        <h4>Height: {character.height}cm</h4>
        <h4>Mass: {character.mass}kg</h4>
      </div>
      <div className="cardRight">
        <h3>Films: </h3>
        {filmArray.map((i) => {
          return <span key={i}>-{films[i]}</span>;
        })}
      </div>
    </div>
  );
};

export default Characters;