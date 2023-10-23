// юнион тип сужает значения(nbgs) до конкретных
type Status = 'ok' | 'loading' | 'error'; //литералы

const staticX: Status = 'loading';

const arr: (number | string)[] = [];

function printId(id: string | number): void {
  if (typeof id === 'string') console.log(id.toLowerCase());
  else console.log(id);
}

function welcome(person: [string, string] | string) {
  if (Array.isArray(person)) console.log('Hello', person.join(' '));
  else console.log('Hello', person);
}
