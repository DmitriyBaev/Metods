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
  function result() {
    new Bowerman('E', 'bowerman');
  }
  const expectation = new Error('Некорректная длина имени');
  expect(result).toThrowError(expectation);
});

test('typeOfUnit', () => {
  function result() {
    new Bowerman('Edgar', 'archer');
  }
  const expectation = new Error('Некорректный тип юнита');
  expect(result).toThrowError(expectation);
});

test('levelUp', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.levelUp();
  const result = bowerman;
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 2,
    attack: 25 * 1.2,
    defence: 25 * 1.2,
  };
  expect(result).toEqual(expectation);
});

test('notLevelUp', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.health = 0;

  function result() {
    bowerman.levelUp();
  }
  const expectation = new Error('нельзя повысить левел умершего');
  expect(result).toThrowError(expectation);
});

test('damage', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.damage(30);
  const result = bowerman.health;

  expect(result).toBe(77.5);
});

test('notDamage', () => {
  const bowerman = new Bowerman('Edgar', 'bowerman');
  bowerman.health = -1;
  bowerman.damage(30);
  const result = bowerman.health;

  expect(result).toBe(-1);
});
