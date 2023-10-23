"use strict";
const staticX = 'loading';
const arr = [];
function printId(id) {
    if (typeof id === 'string')
        console.log(id.toLowerCase());
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person))
        console.log('Hello', person.join(' '));
    else
        console.log('Hello', person);
}
