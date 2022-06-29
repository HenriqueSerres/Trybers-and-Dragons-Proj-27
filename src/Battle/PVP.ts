import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _fighterA: Fighter, private _fighterB: Fighter) {
    super(_fighterA);
  }

  get figtherA() {
    return this._fighterA;
  }

  get figtherB() {
    return this._fighterB;
  }

  fight(): number {
    while (this._fighterA.lifePoints > 0 && this._fighterB.lifePoints > 0) {
      this._fighterA.attack(this._fighterB);
      this._fighterB.attack(this._fighterA);
    }
    return super.fight();
  }
}