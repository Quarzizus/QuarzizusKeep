const getLocalStorage = (key = "") => {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : "";
  } catch (error) {
    return "";
  }
};

export { getLocalStorage };
