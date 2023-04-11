const STORAGE_KEY = 'iamautenticate'

const isAutenticated = () => !!localStorage.getItem(STORAGE_KEY);
const login = token => localStorage.setItem(STORAGE_KEY, JSON.stringify(token));
const logout = () => localStorage.removeItem(STORAGE_KEY);

export { isAutenticated, login, logout }