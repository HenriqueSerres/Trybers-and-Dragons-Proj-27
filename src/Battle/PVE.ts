import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private _fighter: Fighter, private _monsters: SimpleFighter[]) {
    super(_fighter);
  }

  get figther() {
    return this._fighter;
  }

  get monsters() {
    return this._monsters;
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      monster.attack(this._fighter);
      this._fighter.attack(monster);
    });      
    
    return super.fight();
  }
}