import { Player } from './classes';

describe('Basic 2 - Classes', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player();
  });

  it('Shoud be return 2000 LP if the player takes 2000 of damage', () => {
    const res = player.takeDamage(2000);
    expect(res).toBe(2000);
  });

  it('Shoud be return 1000 LP if the player takes 3000 of damage', () => {
    const res = player.takeDamage(1000);
    expect(res).toBe(3000);
  });

  it('Shoud be return 500 LP if the player takes 3500 of damage', () => {
    const res = player.takeDamage(3500);
    expect(res).toBe(500);
  });
});