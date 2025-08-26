import { Rick } from "./components/Rick";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { Collapse } from "./components/presentational/Collapse";
import { LocationList } from "./components/presentational/LocationList";

function App() {
  return (
    <>
      <Collapse className= "list-episode" title="List of Episodes" content={<EpisodeList />} />
      <Collapse className= "list-location" title="List of Locations" content={<LocationList />} />
    </>
  );
}

export default App;
