import { Collapse } from "./Collapse";
import { CharacterList } from "./CharacterList";
import { useLocations } from "../hooks/useLocation";

export const LocationList = () => {
  const { locations } = useLocations();
  return (
    <>
      {locations.map((location) => (
        // <EpisodeItem key={episode.id} episode={episode} />
        <Collapse
          key={location.id}
          className="episode"
          title={location.name}
          content={
            <CharacterList
              ids={location.residents.map((character) => {
                const id = character.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </>
  );
}