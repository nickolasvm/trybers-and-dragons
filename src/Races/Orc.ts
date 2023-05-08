import Race from './Race';

class Orc extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }
}

export default Orc;