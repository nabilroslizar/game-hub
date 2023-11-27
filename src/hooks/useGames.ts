import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]); //to store games
  const [error, setError] = useState(""); //To store error messages

  //useEffect hooks to send request to the backend
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results)) //if everything goes right, set response
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return {
    games,
    error,
  };
};

export default useGames;
