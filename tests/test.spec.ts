import { expect } from "chai";
import "mocha";
import { add } from "../src/test";

describe("Test de add", () => {
  it("Suma de dos numeros", () => {
    expect(add(1, 2)).to.be.eql(3);
  });
});
