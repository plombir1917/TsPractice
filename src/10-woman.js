"use strict";
const durila = {
    name: 'лиза',
    workQuantity: 5,
    isHappy: false,
    boyfriendName: undefined,
};
const he = {
    name: '!захар',
};
function makeHerHappy(girl, boy) {
    if (!girl.isHappy && boy.name === '!захар') {
        return !girl.isHappy;
    }
    else {
        throw new Error('Ошибка!');
    }
}
