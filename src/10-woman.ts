interface Woman {
  name: string;
  workQuantity: number;
  isHappy: boolean;
  boyfriendName?: string;
}

interface Man {
  name: string;
}

const durila: Woman = {
  name: 'лиза',
  workQuantity: 5,
  isHappy: false,
  boyfriendName: undefined,
};

const zk: Man = {
  name: '!захар',
};

function makeHerHappy(she: Woman, he: Man): boolean {
  if (!she.isHappy && he.name === '!захар') {
    she.isHappy = true;
    return she.isHappy;
  } else {
    throw new Error('Ошибка!');
  }
}

makeHerHappy(durila, zk);
console.log(durila.isHappy);
