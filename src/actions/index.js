import { FETCH_USER } from './types';
import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USER,
    payload: request
  };
}
