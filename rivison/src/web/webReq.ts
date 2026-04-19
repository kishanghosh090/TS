import axios from "axios";

axios
  .get("https://kishanranaghosh.xyz")
  .then((response) => {
    console.log(response.headers);
  })
  .catch((err) => {
    console.log(err);
  });
