const createURL = (key, value) => {
  const url = new URL(window.location.href);
  // Lägger till parameter
  url.searchParams.set(key, value);
  return url;
}

// Uppdatera sida
const changeActivePage = (key, value) => {
  // Skapar URL
  const url = createURL(key, value);

  // Change URL without reloading
  //history.pushState({}, '', url)
  
  // Uppdaterar sidan
  location.href = url;
}

export { changeActivePage }