export class Player {
    lifePoints: number;
  
    constructor() {
      this.lifePoints = 4000;
    }
  
    takeDamage(damage: number) {
      if (damage > this.lifePoints) {
        this.lifePoints = 0;
      } else {
        this.lifePoints = this.lifePoints - damage;
      }
      return this.lifePoints;
    }
  }