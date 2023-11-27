import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "325e440bfbec474cbf652399ba42bd82",
  },
});
