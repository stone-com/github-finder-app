const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// get Search results
export const searchUsers = async (text) => {
  // use URLSearchParams to create a query string for the api
  const params = new URLSearchParams({
    q: text,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  // destructure items array from the response
  const { items } = await response.json();

  return items;
};
