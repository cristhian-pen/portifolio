
//Definição do token
const STORAGE_KEY = 'iraergjagjadgádfkgjggjkjskdj'

//Cria a sessão do usuario caso o token seja valido
const isAutenticated = () => !!sessionStorage.getItem(STORAGE_KEY);
const login = token => sessionStorage.setItem(STORAGE_KEY, JSON.stringify(token));
const logout = () => sessionStorage.removeItem(STORAGE_KEY);

export { isAutenticated, login, logout }