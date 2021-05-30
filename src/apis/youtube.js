import axios from "axios";
const KEY = "AIzaSyAOAqkQIT7XuMnmtBJcLD17m3Hi8soaCdI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
