import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background_url: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
