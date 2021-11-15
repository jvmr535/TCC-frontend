/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const TOKEN_KEY = '@enemxp:token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = (data: any) => localStorage.setItem(TOKEN_KEY, data.body);

export const logout = () => localStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
