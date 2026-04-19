import axios, { type AxiosResponse } from "axios";

axios
  .get("https://kishanranaghosh.xyz")
  .then((response: AxiosResponse) => {
    console.log(response.headers);
  })
  .catch((err) => {
    console.log(err);
  });
