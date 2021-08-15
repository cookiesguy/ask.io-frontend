export const setItem = (key: string, value: string) => {
   localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
   const result = localStorage.getItem(key);
   return result;
};

export const removeItem = (key: string) => {
   localStorage.removeItem(key);
};
