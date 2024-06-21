import axios from 'axios';

const API_KEY = '82cff05873ef43caa95a9b67d1b4bcd3';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      pageSize: 20,
      apiKey: API_KEY,
      country: 'us' // Ensure the articles are in English and more relevant
    },
  });
  return response.data;
};

export const fetchArticleByKeyword = async (keyword, page = 1) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      q: keyword,
      page,
      pageSize: 20,
      apiKey: API_KEY,
    },
  });
  return response.data;
};
