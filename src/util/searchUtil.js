export const getUserData = async (search) => {
  let url = `https://api.github.com/search/users?q=${search.searchTerm}`;
  url += search.customSort;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'github-searcher',
      'Accept': 'application/vnd.github.v3.text-match+json',
    },
    method: 'GET',
  });
  const payload = await response.json();
  return payload;
};
