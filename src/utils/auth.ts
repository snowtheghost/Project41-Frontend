export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

export const logout = () => {
  // Clear the authorization token from local storage or cookies
  localStorage.removeItem('token');
};
