const setToken = (token) => {
  localStorage.setItem("token", token);
};
const getToken = () => {
  return localStorage.getItem("token");
};

const setUserInfo = (userName, email, firstName, lastName, role, status) => {
  localStorage.setItem("userName", userName);
  localStorage.setItem("email", email);
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("role", role);
  localStorage.setItem("status", status);
};

const getUserInfo = () => {
  return {
    userName: localStorage.getItem("userName"),
    email: localStorage.getItem("email"),
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    role: localStorage.getItem("role"),
    status: localStorage.getItem("status"),
  };
};

// export
const stogare = {
  setUserInfo,
  getUserInfo,
  setToken,
  getToken,
  // setRememberMe,
  // isRememberMe,
};
export default stogare;
