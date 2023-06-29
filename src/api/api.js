export const api = async (url, options = {}) => {
  const authToken = localStorage.getItem('token');
  const authHeader = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  const headers = {
    "Content-Type": "application/json",
    ...authHeader,
  };
  const { method = "GET", body } = options;
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
    ...options
  });
  return response.json();
};
