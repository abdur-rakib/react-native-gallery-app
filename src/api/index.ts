import {baseUrl, CLIENT_KEY} from '../config';

// get images from unsplash
const fetchImages = async ({pageParam = 1}) => {
  const response = await fetch(
    `${baseUrl}?client_id=${CLIENT_KEY}&page=${pageParam}&per_page=30`,
  );
  const results = await response.json();
  return {results, nextPage: pageParam + 1};
};

export {fetchImages};
