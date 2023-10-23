function printPoint(point: { x: number; y: number }): void {
  console.log(point);
}

const obj1 = {
  x: 1,
  y: 2,
};

const obj2 = {
  x: 1,
  y: 2,
  z: 3,
};

printPoint(obj1);

printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(user.firstName.toUpperCase());
  if (user.lastName) console.log(user.lastName.toUpperCase());
}

printName({ firstName: 'Zakhar', lastName: 'Kopich' });
