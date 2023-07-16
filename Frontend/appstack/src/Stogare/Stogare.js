// const setRememberMe = (isRememberMe) => {
//   localStorage.setItem("isRememberMe", isRememberMe);
// };

// const isRememberMe = () => {
//   // if (
//   //   localStorage.getItem("isRememberMe") === null ||
//   //   localStorage.getItem("isRememberMe") === undefined
//   // ) {
//   //   return true;
//   // }
//   // // convert string to boolean
//   // return JSON.parse(localStorage.getItem("isRememberMe"));
// };

// const setItem = (key, value) => {
//   if (isRememberMe()) {
//     localStorage.setItem(key, value);
//   } else {
//     // sessionStorage.setItem(key, value);
//     localStorage.setItem(key, value);
//   }
// };

// const getItem = (key) => {
//   if (isRememberMe()) {
//     return localStorage.getItem(key);
//   } else {
//     // sessionStorage.getItem(key);
//     localStorage.getItem(key);
//   }
// };
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
