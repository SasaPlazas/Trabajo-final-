const API_URL = "https://valorant-api.com/v1/agents";

export const fetchAllCharacters = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
