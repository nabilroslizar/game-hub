import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background_url: string;
}

const useGenres = () => useData<Genre>("genres");

export default useGenres;
