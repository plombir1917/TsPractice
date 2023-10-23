"use strict";
// с точки зрения кодстайла сначала пишут типы, а потом уже логику кода
const user1 = {
    login: 'login',
    email: 'email',
    password: 'password',
    isOnline: true,
    lastVisited: new Date(),
};
const login = (user) => {
    if (user.login && user.password) {
        console.log('Hello, ', user.login);
    }
};
login(user1);
