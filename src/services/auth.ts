const TOKEN_KEY = "@enemxp:token";

class Authentication {
  token: string = TOKEN_KEY;

  constructor(token: string) {
    this.token = token;
  }

  public getToken = () => localStorage.getItem(this.token);

  public login = (data: any) => {
    localStorage.setItem(this.token, data);
  };
  public logout = () => {
    localStorage.removeItem(this.token);
  };

  public isAuthenticated = () => localStorage.getItem(this.token) !== null;
}

export default new Authentication(TOKEN_KEY);
