

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

export async function doFetch(aim, textToWait) {
  const API_KEY = '43321607-c59baa6fd3b5340d7e6bfbfa2';    
  const url = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: API_KEY,
    q: aim,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  return fetch(`${url}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}