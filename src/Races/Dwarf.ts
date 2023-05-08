import Race from './Race';

class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;