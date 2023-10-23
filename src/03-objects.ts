interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
  name?: string;
  [key: string]: unknown; //динамическое свойство
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'type',
  isNew: true,
};

const car2: Car = {
  wheels: 6,
  brand: 'BMW',
  type: 'type',
  isNew: true,
  year: 2002,
};

car2.go = true; //динамическое добавление свойства

// по стайлгайдам рекомендуют указывать динамические свойства через квадратные скобки
car2['ride'] = 'isRiding';
