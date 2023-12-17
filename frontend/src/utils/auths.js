// Importing the Navbar component
// eslint-disable-next-line import/no-cycle
import Navbar from '../Components/Navbar/Navbar';

// Constants for local and session storage keys
const STORE_USER = 'user';
const STORE_REMEMBER = 'remember';

// Variable to hold the current user's data
let currentUser;

/**
 * Function to clear the authenticated user's data from local and session storage
 */
const clearAuthenticatedUser = () => {
  localStorage.removeItem(STORE_USER);
  sessionStorage.removeItem(STORE_USER);

  localStorage.removeItem(STORE_REMEMBER);
  currentUser = undefined;
};

/**
 * Function to get the authenticated user's data from local or session storage
 * @returns {Object} The authenticated user's data, or undefined if no user is authenticated
 */
const getAuthenticatedUser = () => {
  if (currentUser !== undefined) return currentUser;

  const serializedUser = localStorage.getItem(STORE_USER) ?? sessionStorage.getItem(STORE_USER);
  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};

/**
 * Function to set the authenticated user's data in local or session storage
 * @param {Object} authenticatedUser - The authenticated user's data
 * @param {boolean} remember - Whether to remember the user's data across sessions
 */
const setAuthenticatedUser = (authenticatedUser, remember = false) => {
  clearAuthenticatedUser();

  const serializedUser = JSON.stringify(authenticatedUser);
  (remember ? localStorage : sessionStorage).setItem(STORE_USER, serializedUser);
  localStorage.setItem(STORE_REMEMBER, remember);

  currentUser = authenticatedUser;

  // Call the Navbar function after setting the authenticated user
  Navbar();
};

/**
 * Function to check if a user is authenticated
 * @returns {boolean} True if a user is authenticated, false otherwise
 */
const isAuthenticated = () => currentUser !== undefined || getAuthenticatedUser() !== undefined;

// Exporting the functions for use in other modules
export {
  getAuthenticatedUser,
  setAuthenticatedUser,
  isAuthenticated,
  clearAuthenticatedUser,
};
