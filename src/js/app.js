import {
  Bowerman, Swordsman, Magician, Deamon, Undead, Zombie,
} from './units';

const bowerman = new Bowerman('Edgar', 'bowerman');
console.log(bowerman);
bowerman.health = 50;
console.log(bowerman);
bowerman.levelUp();
console.log(bowerman);
bowerman.damage(30);
console.log(bowerman);

const swordsman = new Swordsman('Arthur', 'swordsman');
console.log(swordsman);

const magician = new Magician('Gendalf', 'magician');
console.log(magician);

const deamon = new Deamon('Max', 'deamon');
console.log(deamon);

const undead = new Undead('Victor', 'undead');
console.log(undead);

const zombie = new Zombie('Valentin', 'zombie');
console.log(zombie);
