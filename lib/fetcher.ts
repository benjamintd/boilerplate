import fetch from "isomorphic-unfetch";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NOW_URL;

export default (url: string, options?: fetch.IsomorphicHeaders) =>
  fetch(baseUrl + url, options).then(r => r.json());
