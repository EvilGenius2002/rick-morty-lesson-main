import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterList = ({ ids }) => {
  console.log("CharacterList", ids);
  const { characters, isLoading, isEmpty } = useCharacters(ids);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  console.log("IsEmpty", isEmpty);
  if (isEmpty) {
    return <div className="no-data">No characters here</div>;
  }

  console.log(characters);

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
