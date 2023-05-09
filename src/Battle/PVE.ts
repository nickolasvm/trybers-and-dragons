import Character from '../Character';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  protected monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    player: Fighter | Character, 
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this.monsters = monsters;
  }

  public fight(): number {
    const { player, monsters } = this;

    while (player.lifePoints !== -1 && monsters.length > 0) {
      player.attack(monsters[0]);

      if (monsters[0].lifePoints === -1) { monsters.shift(); }

      monsters.forEach((monster) => {
        monster.attack(player);
      });
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;