import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static countInstancesOfArchetype = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.countInstancesOfArchetype += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countInstancesOfArchetype;
  }
}

export default Warrior;