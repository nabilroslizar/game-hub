import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]); //to store games
  const [error, setError] = useState(""); //To store error messages

  //useEffect hooks to send request to the backend
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/ games")
      .then((res) => setGames(res.data.results)) //if everything goes right, set response
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
