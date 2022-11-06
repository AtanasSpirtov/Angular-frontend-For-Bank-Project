export interface User {

  username: string;

  password: string;

  email: string;
}

export class LoggedUser implements User {
  email: string;
  password: string;
  username: string;

  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
