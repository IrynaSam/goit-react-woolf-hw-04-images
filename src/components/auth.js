const API_KEY = '40924085-809e05b3e969373237b06a228';
const URL = `https://pixabay.com/api/`;

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await fetch(
    `${URL}?q=${encodeURIComponent(
      searchQuery
    )}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, text: ${text}`);
  }

  const data = await response.json();
  if (data.hits.length === 0) {
    throw new Error('No more results available.');
  }
  return data;
};
