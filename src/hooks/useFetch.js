import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

export const useFetch = pathName => {
  if (pathName === '/') pathName = '/movie';
  let endpoint = `${API_URL}${pathName}/popular?api_key=${API_KEY}`;
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setItems(data.results);
  };

  useEffect(() => {
    getItems();
  }, [endpoint]);

  return [items, setItems];
};
