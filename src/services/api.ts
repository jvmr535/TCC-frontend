import axios from 'axios';

import { ILogin } from '../interfaces';

const apiAddress = axios.create({
  baseURL: 'http://localhost:3333',
});

const api = {
  async login(loginCredentials: ILogin): Promise<ILogin> {
    return (await apiAddress.post('/session', loginCredentials)).data;
  },
};

export default api;
