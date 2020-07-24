import http from "./http";
import config from "../config/default.json";
import { getJwt } from "./auth";
import { toast } from "react-toastify";

const candidatesEndpoint = config.candidatesURL;
const commentsEndpoint = config.commentsURL;
const axiosConfig = { headers: { "x-auth-token": getJwt() } };
let candidates = [];
let candidate = {};
const strCandidates = "/candidates";
const notFound = "/not-found";

export async function getCandidates() {
  await http
    .get(candidatesEndpoint)
    .then((res) => (candidates = res.data))
    .catch((error) => toast.error(error.response.data));
  return candidates;
}

export async function addCandidate(name, specialties, presentation) {
  await http
    .post(
      candidatesEndpoint,
      {
        name,
        specialties,
        presentation,
      },
      axiosConfig
    )
    .then((res) => {
      window.location = strCandidates;
    })
    .catch((error) => toast.error(error.response.data));
}

export async function getCandidate(_id) {
  const url = candidatesEndpoint + "/" + _id;
  await http
    .get(url, axiosConfig)
    .then((res) => (candidate = res.data))
    .catch((error) => {
      toast.error(error.response.data);
      window.location = notFound;
    });
  return candidate;
}

export async function editCandidate(_id, name, specialties, presentation) {
  const url = candidatesEndpoint + "/" + _id;
  await http
    .put(
      url,
      {
        name,
        specialties,
        presentation,
      },
      axiosConfig
    )
    .then((res) => {
      window.location = strCandidates;
    })
    .catch((error) => toast.error(error.response.data));
}

export async function addComment(candidateId, userId, name, rating, comment) {
  const url = commentsEndpoint + "/" + candidateId;
  await http
    .post(
      url,
      {
        userId,
        name,
        rating,
        comment,
      },
      axiosConfig
    )
    .then((res) => {
      window.location = `/feedback/${candidateId}`;
    })
    .catch((error) => toast.error(error.response.data));
}

export async function updateComment(candidateId, name, rating, comment) {
  const url = commentsEndpoint + "/" + candidateId;
  await http
    .put(
      url,
      {
        name,
        rating,
        comment,
      },
      axiosConfig
    )
    .then((res) => {
      window.location = `/feedback/${candidateId}`;
    })
    .catch((error) => toast.error(error.response.data));
}
