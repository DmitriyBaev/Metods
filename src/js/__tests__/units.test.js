import Character
  from '../Character';

import Bowerman
  from '../Bowerman';

import Swordsman
  from '../Swordsman';

import Magician
  from '../Magician';

import Deamon
  from '../Deamon';

import Undead
  from '../Undead';

import Zombie
  from '../Zombie';

test('Character', () => {
  const result = new Character('Edgar', 'bowerman');
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 1,
  };

  expect(result).toEqual(expectation);
});

test('Bowerman', () => {
  const result = new Bowerman('Edgar', 'bowerman');
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expectation);
});

test('Swordsman', () => {
  const result = new Swordsman('Arthur', 'swordsman');
  const expectation = {
    name: 'Arthur',
    type: 'swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expectation);
});

test('Magician', () => {
  const result = new Magician('Gendalf', 'magician');
  const expectation = {
    name: 'Gendalf',
    type: 'magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expectation);
});

test('Deamon', () => {
  const result = new Deamon('Max', 'deamon');
  const expectation = {
    name: 'Max',
    type: 'deamon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(expectation);
});

test('Undead', () => {
  const result = new Undead('Victor', 'undead');
  const expectation = {
    name: 'Victor',
    type: 'undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(expectation);
});

test('Zombie', () => {
  const result = new Zombie('Valentin', 'zombie');
  const expectation = {
    name: 'Valentin',
    type: 'zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(expectation);
});

test('lengthOfName', () => {
  expect(() => new Bowerman('E', 'bowerman')).toThrowError(
    'Некорректная длина имени',
  );
});

test('typeOfUnit', () => {
  expect(() => new Bowerman('Edgar', 'archer')).toThrowError(
    'Некорректный тип юнита',
  );
});

test('levelUp', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.levelUp();
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 2,
    attack: 25 * 1.2,
    defence: 25 * 1.2,
  };
  expect(bowerman).toEqual(expectation);
});

test('notLevelUp', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.health = 0;

  expect(() => bowerman.levelUp()).toThrowError(
    'нельзя повысить левел умершего',
  );
});

test('damage', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.damage(30);

  expect(bowerman.health).toBe(77.5);
});

test('notDamage', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.health = -1;
  bowerman.damage(30);

  expect(bowerman.health).toBe(-1);
});
