import axios from "axios";

export async function getData(page = 1) {
  console.log("PAGE SELECTED", page);
  const token = "40a9df4fa70f9da47bef4de5bef2d98724673e57";
  const url = `https://api.github.com/repos/facebook/create-react-app/issues?page=${page}`;
  return await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function getInfoAboutRepo() {
  const token = "40a9df4fa70f9da47bef4de5bef2d98724673e57";
  const url = "https://api.github.com/repos/facebook/create-react-app";
  return await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

// async function getAll() {
//   const token = "40a9df4fa70f9da47bef4de5bef2d98724673e57";
//   const urlData =
//     "https://api.github.com/repos/facebook/create-react-app/issues";
//   const urlInfo = "https://api.github.com/repos/facebook/create-react-app";
//   const header = { headers: { Authorization: `Bearer ${token}` } };

//   const requestData = axios.get(urlData, header);
//   const requestInfo = axios.get(urlInfo, header);

//   return await axios
//     .all([requestData, requestInfo])
//     .then(axios.spread((data, info) => (data, info)));
// }
