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

});