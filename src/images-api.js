import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
const fetchImagesBySearchQuery = async (searchQuery) => {
  const response = await axios.get("/search/photos", {
    // headers: {
    //   "Accept-Version": "v1",
    // },
    params: {
      client_id: "JisVWQgx6AEYtniKmKYXL6-p9RHdbQ5wUsL3pOu_pnY",
      query: searchQuery,
    },
  });
  console.log(response.data.results);

  return response.data.results;
};
export default fetchImagesBySearchQuery;
