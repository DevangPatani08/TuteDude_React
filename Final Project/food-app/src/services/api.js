import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

export const getRandomMeal = async () => {
  try {
    const res = await axios.get(`${API_URL}random.php`);
    return (res.data.meals ? res.data.meals[0] : null);
  } catch (e) {
    console.error('Error fetching random meals:', e);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}categories.php`);
    return res.data.categories;
  } catch (e) {
    console.error('Error fetching categories:', e);
    return [];
  }
};

export const fetchMealByCategory = async (category) => {
  try {
    const res = await axios.get(`${API_URL}filter.php?c=${category}`);
    return res.data.meals || [];
  } catch (e) {
    console.error('Error fetching meals by category:', e);
    return [];
  }
};

export const fetchMealById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}lookup.php?i=${id}`);
    return res.data.meals ? res.data.meals[0] : null;
  } catch (e) {
    console.error('Error fetching meal by ID:', e);
    return null;
  }
};