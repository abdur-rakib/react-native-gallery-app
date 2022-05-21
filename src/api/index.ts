import axios from 'axios';
import {baseUrl, CLIENT_KEY} from '../config';

// get images from unsplash
const fetchImages = async (page: number) => {
  const {data} = await axios.get(
    `${baseUrl}?client_id=${CLIENT_KEY}&page=${page}&per_page=30`,
  );
  return data;
};

export {fetchImages};
