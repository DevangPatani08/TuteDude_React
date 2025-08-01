import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}random.php`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}filter.php?c=${category}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    return [];
  }
};

export const fetchMealById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal by ID:', error);
    return null;
  }
};