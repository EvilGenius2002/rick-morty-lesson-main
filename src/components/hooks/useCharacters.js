import { fetchCharacters } from "../../api";
import { useState, useEffect } from "react";

export const useCharacters = (ids) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      if (ids.length === 0) {
        setIsEmpty(true);
        setIsLoading(false);
      }
      else {
        setIsEmpty(false);
        if (Array.isArray(data)){
        }else{
          data = [data];
        }
        setCharacters(data);
        setIsLoading(false);
      }
    });
  }, [ids]);

  return { characters, isLoading, isEmpty };
};
