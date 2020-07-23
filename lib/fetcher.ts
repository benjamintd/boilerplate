import fetch from "isomorphic-unfetch";

export default (url: string, options?: fetch.IsomorphicHeaders) =>
  fetch(url, options).then(r => r.json());
