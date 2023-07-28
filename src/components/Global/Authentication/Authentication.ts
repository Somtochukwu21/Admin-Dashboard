export const setAuth = (title: string, data: any) => {
  localStorage.setItem(title, data);
};

export const getAuth = (title: string) => {
  return localStorage.getItem(title);
};

export const clearAuth = (title: string) => {
  localStorage.removeItem(title);
};
