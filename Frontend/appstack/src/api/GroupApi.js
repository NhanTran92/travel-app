import Api from "./Api";

const url = "/groups";

const getAll = () => {
  return Api.get(`${url}`);
};

const existsByName = (name) => {
  return Api.get(`${url}/name/${name}`);
};

const create = (name) => {
  const body = {
    name: name,
  };
  return Api.post(url, body);
};
// export
const api = {
  getAll,
  create,
  existsByName,
};
export default api;
