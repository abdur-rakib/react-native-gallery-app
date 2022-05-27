import {baseUrl, CLIENT_KEY, PER_PAGE} from '../config';

// get images from unsplash
const fetchImages = async ({pageParam = 1}) => {
  const response = await fetch(
    `${baseUrl}?client_id=${CLIENT_KEY}&page=${pageParam}&per_page=${PER_PAGE}`,
  );
  const results = await response.json();
  return {results, nextPage: pageParam + 1};
};

export {fetchImages};
