import Api from "./Api";

const url = "/users";

const create = (firstname, lastname, username, email, password) => {
  const body = {
    firstName: firstname,
    lastName: lastname,
    userName: username,
    email: email,
    password: password,
  };
  return Api.post(url, body);
};
const resendEmail = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/userRegistrationConfirmRequest`, {
    params: parameters,
  });
};

const resendEmailToResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/resendResetPassword`, {
    params: parameters,
  });
};

const requestResetPassword = (email) => {
  const parameters = {
    email: email,
  };
  return Api.get(`${url}/resetPasswordRequest`, {
    params: parameters,
  });
};
const resetPassword = (token, newPassword) => {
  const parameters = {
    token: token,
    newPassword: newPassword,
  };

  return Api.get(`${url}/resetPassword`, {
    params: parameters,
  });
};

const getProfile = () => {
  return Api.get(`${url}/profile`);
};

const updateProfile = (avatarUrl) => {
  const body = {
    avatarUrl: avatarUrl,
  };
  return Api.put(`${url}/profile`, body);
};

const getToken = (token) => {
  const parameters = {
    token: token,
  };

  return Api.get(`${url}/activeUser`, {
    params: parameters,
  });
};

const existsByEmail = (email) => {
  return Api.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
  return Api.get(`${url}/userName/${username}`);
};
// export
const api = {
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
export default api;
