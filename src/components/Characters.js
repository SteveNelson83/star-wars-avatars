import React from 'react';
import Character from './Character';
import "../styles.css";

const Characters = ({characters=[]}) => {
  return (
    <>
    { characters.map((character) => {
        if (character) {
          return (
            <div key={character.name}>
              <Character className="character" {...character}/>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Characters