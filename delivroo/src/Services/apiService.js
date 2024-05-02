// services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const apiService = axios.create({
  baseURL: API_URL,
});

export const sendCartData = async (cartData) => {
    try {
      const response = await apiService.post('/cart', cartData); // Envoie les données du panier au backend
      return response.data; // Retourne les données de réponse du backend si nécessaire
    } catch (error) {
      throw error;
    }
  };