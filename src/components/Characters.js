import React from 'react';
import Character from './Character';

const Characters = ({characters=[]}) => {
  return (
    <>
    { characters.map((character) => {
        if (character) {
          return (
            <div key={character.name}>
              <h1>{character.name}</h1>
              <Character {...character}/>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default Characters