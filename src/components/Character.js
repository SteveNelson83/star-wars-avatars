import React from "react";
import Avatar from "react-nice-avatar";

const Characters = (character) => {
  console.log(character.hair_color);

	let hairColors = {
		"none": "",
		"black": "black",
		"brown": "brown",
		"blond": "yellow",
		"auburn": "orange",
		"white": "white",
		"grey": "grey",
		"gold": "gold",
		"n/a": ""
	}

  const config = {
    sex: character.gender,
    faceColor: character.skin_color,
    earSize: "big",
    hairColor: hairColors[character.hair_color.split(",")[0]],
    hairStyle: "normal",
    hatStyle: character.hair_color === "none" || character.hair_color === "n/a" ? "beanie" : "none",
    hatColor: "black",
    eyeStyle: "circle",
    glassesStyle: "none",
    noseStyle: "long",
    mouthStyle: "laugh",
    shirtStyle: "hoody",
    shirtColor: "white",
    bgColor: "orange",
  };
  return <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />;
};

export default Characters;
// "birth_year": "19 BBY",
// "eye_color": "Blue",
// "films": [
//     "https://swapi.dev/api/films/1/",
//     ...
// ],
// "gender": "Male",
// "hair_color": "Blond",
// "height": "172",
// "mass": "77",
// "name": "Luke Skywalker",
// "skin_color": "Fair",
// "species": [
//     "https://swapi.dev/api/species/1/"
// ],
