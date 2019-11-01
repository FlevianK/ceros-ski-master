import "babel-polyfill";
import { Skier } from "./Skier";

describe('Skier direction when', () => {
  let skier, 
    left_val, 
    right_val, 
    left_speed, 
    right_speed,
    up_val,
    up_speed,
    rock_obstacle, 
    tree_obstacle,
    skier_up,
    skier_down,
    jump_ramp;
  beforeEach(() => {
    skier = new Skier(0, 0)
    left_val = 1;
    right_val = 5;
    left_speed = -10;
    right_speed = 10;
    up_val = 6;
    up_speed = 10;
    rock_obstacle = 'rock1';
    tree_obstacle = 'tree';
    skier_up = 'skierUp';
    jump_ramp = 'jumpRamp';
    skier_down = 'skierDown'
  })
  
  test('left arrow key is pressed maps to 1 and faces left side', () => {
    skier.turnLeft();
    expect(skier.direction).toBe(left_val);
  });
  
  test('right arrow key is pressed maps to 5 and faces right side', () => {
    skier.turnRight();
    expect(skier.direction).toBe(right_val);
  });

  test('facing left side goes towards negative infinity', () => {
    skier.turnLeft();
    skier.move();
    expect(skier.x).toBe(left_speed);
  });

  test('facing right side goes towards positive infinity', () => {
    skier.turnRight();
    skier.move();
    expect(skier.x).toBe(right_speed);
  });

  test('up arrow key is pressed maps to 6 and faces right side', () => {
    skier.turnUp();
    expect(skier.direction).toBe(up_val);
  });

  test('facing up wards he jumps', () => {
    skier.turnUp();
    skier.move();
    expect(skier.y).toBe(up_speed);
  });

  test('hits a jump ramp or jumping over rocks he should face upwards', () => {
    skier.CheckIfSkierShouldJump(rock_obstacle);
    expect(skier.assetName).toBe(skier_down);

    skier.CheckIfSkierShouldJump(jump_ramp);
    skier.CheckIfSkierShouldJump(rock_obstacle);
    expect(skier.assetName).toBe(skier_up);
  });

  test('hits a jump ramp he should face upwards as result of jumping', () => {
    skier.makeSkierJumpIfHitRamp(tree_obstacle);
    expect(skier.assetName).toBe(skier_down);

    skier.makeSkierJumpIfHitRamp(jump_ramp);
    expect(skier.assetName).toBe(skier_up);
  });

  test('jumping he should face upwards as he jumps over rocks', () => {
    skier.setSkierJumpOverRock(rock_obstacle);
    expect(skier.assetName).toBe(skier_down);

    skier.turnUp();
    skier.setSkierJumpOverRock(rock_obstacle);
    expect(skier.assetName).toBe(skier_up);
  });
});