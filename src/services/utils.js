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

// eslint-disable-next-line no-unused-vars
const putRequest = async function (url, body = {}) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  return response.json();
};

// eslint-disable-next-line no-unused-vars
const deleteRequest = async function (url) {
  const options = {
    method: 'DELETE',
  };
  const response = await fetch(url, options);
  return response.json();
};
