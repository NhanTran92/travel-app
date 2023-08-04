import httpClient from "./httpClient";

const url = "/users";

const create = (firstname, lastname, username, email, password) => {
  const body = {
    firstName: firstname,
    lastName: lastname,
    userName: username,
    email: email,
    password: password,
  };
  return httpClient.post(url, body);
};
const resendEmail = (email) => {
  const parameters = {
    email: email,
  };
  return httpClient.get(`${url}/userRegistrationConfirmRequest`, {
    params: parameters,
  });
};

const resendEmailToResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return httpClient.get(`${url}/resendResetPassword`, {
    params: parameters,
  });
};

const requestResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return httpClient.get(`${url}/resetPasswordRequest`, {
    params: parameters,
  });
};
const resetPassword = (token, newPassword) => {
  const parameters = {
    token: token,
    newPassword: newPassword,
  };

  return httpClient.get(`${url}/resetPassword`, {
    params: parameters,
  });
};

const getProfile = () => {
  return httpClient.get(`${url}/profile`);
};

const updateProfile = (avatarUrl) => {
  const body = {
    avatarUrl: avatarUrl,
  };
  return httpClient.put(`${url}/profile`, body);
};

const getToken = (token) => {
  const parameters = {
    token: token,
  };

  return httpClient.get(`${url}/activeUser`, {
    params: parameters,
  });
};

const existsByEmail = (email) => {
  return httpClient.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
  return httpClient.get(`${url}/userName/${username}`);
};
// export
const httpClients = {
  existsByEmail,
  resendEmailToResetPassword,
  resetPassword,
  existsByUsername,
  create,
  resendEmail,
  requestResetPassword,
  getToken,
  getProfile,
  updateProfile,
};
export default httpClients;
