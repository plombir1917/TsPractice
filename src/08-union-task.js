"use strict";
const junior = {
    login: 'login',
    skills: ['first', 'second'],
    level: 'junior',
};
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
gradeDeveloper(junior, 'middle');
