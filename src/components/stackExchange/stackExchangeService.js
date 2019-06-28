import http from "../../services/httpService";

const endpoint = process.env.REACT_APP_API_URL + "/stackexchange";

export async function search(query, page, pageSize) {
  const { data } = await http.get(endpoint + "/search", {
    params: { query, page, pageSize }
  });
  return data;
}

export default {
  search
};
