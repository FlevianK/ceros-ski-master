import "babel-polyfill";
import { Rhino } from "./Rhino";
import { Skier } from "./Skier";

describe('Rhino', () => {
  let rhino,
    skier,
    left_speed,
    right_speed,
    up_speed,
    down_speed,
    rhino_skier_starting_distance,
    kill_skier,
    rhino_lift,
    exit_skier,
    rhino_lift_skier

  beforeEach(() => {
    rhino = new Rhino(0, 0);
    skier = new Skier(0, 0);
    left_speed = 10;
    right_speed = 20;
    up_speed = -3000;
    down_speed = -3000;
    rhino_skier_starting_distance = 3000;
    kill_skier = 'killSkier';
    exit_skier = 7;
    rhino_lift = 'rhinoLift';
    rhino_lift_skier = 1
  })

  test('appears and run after skier', () => {
    skier.turnLeft();
    skier.y = rhino_skier_starting_distance;
    rhino.move(skier);
    expect(rhino.x).toBe(left_speed);
  });

  test('appears and run after skier', () => {
    skier.turnRight();
    skier.y = rhino_skier_starting_distance;
    rhino.move(skier);
    expect(rhino.x).toBe(right_speed);
  });

  test('appears and run after skier', () => {
    skier.turnUp();
    skier.y = rhino_skier_starting_distance;
    rhino.move(skier);
    expect(rhino.x).toBe(up_speed);
  });

  test('appears and run after skier', () => {
    skier.turnDown();
    skier.y = rhino_skier_starting_distance;
    rhino.move(skier);
    expect(rhino.x).toBe(down_speed);
  });

  test('catches skier', () => {
    rhino.action = rhino_lift_skier
    rhino.setAction(rhino.action);
    expect(rhino.assetName).toBe(rhino_lift);
    rhino.updateAction(skier);
    expect(rhino.assetName).toBe(rhino_lift);
  });

  test('exits skier', () => {
    rhino.removeSkier(skier);
    expect(skier.direction).toBe(exit_skier);
    expect(skier.y).toBe(rhino.y);
    expect(skier.x).toBe(rhino.x);
    expect(skier.assetName).toBe(kill_skier);
  });
})

