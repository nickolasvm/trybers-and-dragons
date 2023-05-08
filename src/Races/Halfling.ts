import Race from './Race';

class Halfling extends Race {
  private static _instances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  public get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;