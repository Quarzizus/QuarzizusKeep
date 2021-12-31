const setLocalStorage = (key: string, value: any) => {
  try {
    const item = localStorage.setItem(key, JSON.stringify(value));
    return item;
  } catch (error) {
    return "";
  }
};

export { setLocalStorage };
