"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'type',
    isNew: true,
};
const car2 = {
    wheels: 6,
    brand: 'BMW',
    type: 'type',
    isNew: true,
    year: 2002,
};
car2.go = true; //динамическое добавление свойства
// по стайлгайдам рекомендуют указывать динамические свойства через квадратные скобки
car2['ride'] = 'isRiding';
