import axios from "axios";

export const getProductsAPI = async () => axios.get("/api/products"); //getting all the products

export const getSingleProduct = async (itemId) => axios.get(`/api/products/${itemId}`);

export const categoryProduct = async () => axios.get('/api/categories');

export const singleCategoryProduct = async (categoryId) => axios.get(`/api/categories/${categoryId}`);

// wishlist apis
export const wishlistData = async () => axios.get('/api/user/wishlist');

export const wishlistAdd = async () => axios.post('');