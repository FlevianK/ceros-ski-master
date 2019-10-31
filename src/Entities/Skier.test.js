import "babel-polyfill";
import { Skier } from "./Skier";

describe('Skier direction when', () => {
  let skier, left_val, right_val, left_speed, right_speed;
  beforeEach(() => {
    skier = new Skier(0, 0)
    left_val = 1;
    right_val = 5;
    left_speed = -10;
    right_speed = 10;
  })
  
  test('left arrow key is pressed', () => {
    skier.turnLeft();
    expect(skier.direction).toBe(left_val);
  });
  
  test('right arrow key is pressed', () => {
    skier.turnRight();
    expect(skier.direction).toBe(right_val);
  });

  test('right arrow key is pressed', () => {
    skier.turnLeft();
    skier.move();
    expect(skier.x).toBe(left_speed);
  });

  test('right arrow key is pressed', () => {
    skier.turnRight();
    skier.move();
    expect(skier.x).toBe(right_speed);
  });

});