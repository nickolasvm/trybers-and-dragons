import Race from './Race';

class Elf extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}

export default Elf;