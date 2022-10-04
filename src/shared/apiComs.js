const myUrl = "https://run.mocky.io/v3/0cb08877-e723-4b1b-a5ef-c23dc49e7e90";

export const getApiData = async () => {
  const response = await fetch(myUrl);
  const data = await response.json();
  return data;
};
