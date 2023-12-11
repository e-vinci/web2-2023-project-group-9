
const STORE_USER = 'user';
let currentUser;

const clearAuthenticatedUser = () => {
  localStorage.removeItem(STORE_USER);
  sessionStorage.removeItem(STORE_USER);
  currentUser = undefined;
};

const getAuthenticatedUser = () => {
  if (currentUser !== undefined) return currentUser;

  const serializedUser = localStorage.getItem(STORE_USER) ?? sessionStorage.getItem(STORE_USER);
  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};

const setAuthenticatedUser = (authenticatedUser) => {
  clearAuthenticatedUser();

  const serializedUser = JSON.stringify(authenticatedUser);
  localStorage.setItem(STORE_USER, serializedUser);
  sessionStorage.setItem(STORE_USER, serializedUser);

  currentUser = authenticatedUser;
};

const isAuthenticated = () => currentUser !== undefined || getAuthenticatedUser() !== undefined;

const getRememberMe = () => sessionStorage.getItem('remember') === 'true';

export {
  getAuthenticatedUser,
  setAuthenticatedUser,
  isAuthenticated,
  clearAuthenticatedUser,
  getRememberMe,
};
