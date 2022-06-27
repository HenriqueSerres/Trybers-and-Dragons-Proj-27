import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static countInstancesOfArchetype = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.countInstancesOfArchetype += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countInstancesOfArchetype;
  }
}

export default Mage;