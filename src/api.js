export const fetchEpisodes = () => {
  return fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export const fetchCharacters = async (ids) => {
  await sleep(1000);
  return fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`
  ).then((response) => response.json());
};

export const fetchLocations = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  const data = await response.json();
  console.log(data.results);
  return data.results;
};


const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
