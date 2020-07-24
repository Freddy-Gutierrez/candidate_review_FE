import http from "./http";
import config from "../config/default.json";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const usersEndpoint = config.usersURL;
const tokenKey = "token";
const strLogin = "/login";
const strCandidates = "/candidates";

export async function signUp(username, password) {
  await http
    .post(usersEndpoint, {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem(tokenKey, res.headers["x-auth-token"]);
      window.location = strCandidates;
    })
    .catch((err) => toast.error(err.response.data));
}

export async function login(username, password) {
  await http
    .post(usersEndpoint + strLogin, {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem(tokenKey, res.headers["x-auth-token"]);
      window.location = strCandidates;
    })
    .catch((error) => toast.error(error.response.data));
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/";
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function isVisible(user) {
  if (!user) {
    return { display: "none" };
  }
  return user.isAdmin ? { display: "contents" } : { display: "none" };
}

export function getCurrentUser() {
  // if you have a valid json token
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
