import axios from 'axios';
import { AUTH } from './auth';

const BASE_URL = 'http://localhost:8000';

const ENDPOINTS = {
  getAllUserCards: BASE_URL + '/api/usercards/',
  getAllTemplates: BASE_URL + '/api/templates/',
  login: '/api/auth/login/',
  deleteUsercard: (id) =>
    `${process.env.REACT_APP_BASE_URL}/api/usercards/${id}/`
};

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);
export const API = { GET, ENDPOINTS, POST, getHeaders, DELETE };
