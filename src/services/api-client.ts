import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9da65e03a36a4c7cab8509df871a372e",
  },
});
