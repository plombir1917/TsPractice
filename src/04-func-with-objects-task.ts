// с точки зрения кодстайла сначала пишут типы, а потом уже логику кода

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: 'login',
  email: 'email',
  password: 'password',
  isOnline: true,
  lastVisited: new Date(),
};

const login = (user: User | Admin) => {
  if (user.login && user.password) {
    console.log('Hello, ', user.login);
  }
};

login(user1);
