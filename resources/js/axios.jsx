import axios from "axios";

// Necessary for Laravel to detect AJAX requests
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Read CSRF token from meta tag
const token = document
  .querySelector('meta[name="csrf-token"]')
  ?.getAttribute('content');

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
}

export default axios;