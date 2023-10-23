type level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: level;
}

const junior: Developer = {
  login: 'login',
  skills: ['first', 'second'],
  level: 'junior',
};

function gradeDeveloper(dev: Developer, newLevel: level) {
  dev.level = newLevel;
}

gradeDeveloper(junior, 'middle');
