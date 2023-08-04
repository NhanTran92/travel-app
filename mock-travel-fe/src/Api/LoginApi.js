import httpClient from "./httpClient";

const login = (username, password) => {
  const parameters = {
    username: username,
    password: password,
  };
  return httpClient.get(`/login`, {
    params: parameters,
  });
};

// export
const httpClients = {
  login,
};
export default httpClients;
