export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (item) {
    try {
      return JSON.parse(item);
    } catch (error) {
      return null;
    }
  }

  return null;
};

export const setLocalStorage = (key: string, newValue: unknown) => {
  if (typeof newValue === 'string') {
    localStorage.setItem(key, newValue);
    return;
  }

  localStorage.setItem(key, JSON.stringify(newValue));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
