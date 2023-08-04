import httpClient from "./httpClient";

const url = "/groups";

const getAll = () => {
  return httpClient.get(`${url}`);
};

const existsByName = (name) => {
  return httpClient.get(`${url}/name/${name}`);
};

const deleteById = (ids) => {
  return httpClient.delete(`${url}/${ids}`);
};

const create = (name) => {
  const body = {
    name: name,
  };
  return httpClient.post(url, body);
};
// export
const httpClients = {
  getAll,
  create,
  existsByName,
  deleteById,
};
export default httpClients;
