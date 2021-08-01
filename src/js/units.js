export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректная длина имени');
    }

    const typesOfUnits = ['bowerman', 'swordsman', 'magician', 'deamon', 'undead', 'zombie'];
    if (!typesOfUnits.includes(type.toLowerCase())) {
      throw new Error('Некорректный тип юнита');
    }
    this.name = name,
    this.type = type,
    this.health = 100,
    this.level = 1,
    this.attack,
    this.defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25,
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40,
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10,
    this.defence = 40;
  }
}

export class Deamon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25,
    this.defence = 25;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40,
    this.defence = 10;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10,
    this.defence = 40;
  }
}
