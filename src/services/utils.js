export const getRequest = async function (url) {
  const response = await fetch(url);
  return response.json();
};

export const postRequest = async function (url, body = {}) {
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  return response.json();
};
// const putRequest = ;
// const deleteRequest = ;