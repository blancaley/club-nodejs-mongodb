const createURL = (key, value) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;

  // Lägger till parameter
  search_params.set(key, value);
  return url
}

// Uppdatera sida
const changeActivePage = (key, value) => {
  // Skapar URL
  const url = createURL(key, value);
  // Uppdaterar sidan
  location.href = url;
}

export { changeActivePage }