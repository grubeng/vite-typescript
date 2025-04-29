import { Character, CharacterResponse } from "./model/api.model";

async function fetchCharacters(): Promise<Character[]> {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const content: CharacterResponse = await response.json();

  return content.results;
}

export { fetchCharacters };
