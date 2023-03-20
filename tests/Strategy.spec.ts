import { expect } from "chai";
import "mocha";
import { Solver } from "../src/Solver";
import { BubbleSort } from "../src/BubbleSort";

describe("Test de Solver", () => {
  it("BubbleSort", () => {
    const myArray = [1, 4, 2, 3];
    const expectedArray = [1, 2, 3, 4];
    const mySolver = new Solver(myArray, new BubbleSort());

    expect(mySolver.logic()).to.be.eql(expectedArray);
  });

  it("BubbleSort", () => {
    const myArray = [1, 4, 2, 3];
    const expectedArray = [1, 2, 3, 4];
    const mySolver = new Solver(myArray, new BubbleSort());

    expect(mySolver.logic()).to.be.eql(expectedArray);
  });
});
