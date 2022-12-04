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

// Get a single User
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};

// get User Repos
export const getUserRepos = async (login) => {
  // use URLSearchParams to create sort order and items per page params
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
};
