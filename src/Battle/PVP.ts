import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected opponent: Fighter | Character;

  constructor(player: Fighter | Character, opponent: Fighter | Character) {
    super(player);
    this.opponent = opponent;
  }

  public fight(): number {
    const { player, opponent } = this;

    while (player.lifePoints !== -1 && opponent.lifePoints !== -1) {
      opponent.attack(player);
      player.attack(opponent);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;