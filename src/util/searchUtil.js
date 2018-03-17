
export const getUserData = async (search) => {
  let url = `https://api.github.com/users/${search.searchTerm}`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'github-searcher',
    },
    method: 'GET',
  });
  const payload = await response.json();
  return payload;
}

export const getFollowerData = async (search, page) => {
  let url = `https://api.github.com/users/${search.searchTerm}/followers?per_page=30`;
  url += page > 1 ? `&page=${page}` : ``;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'github-searcher',
    },
    method: 'GET',
  });
  const payload = await response.json();
  return payload;
};
