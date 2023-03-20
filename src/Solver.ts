import { Strategy } from "./Strategy";

/**
 * Clase utilizada para resolver el problema de ordenacion con diferentes algoritmos
 *
 */
export class Solver {
  constructor(private data: number[], private strategy: Strategy) {}

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  logic() {
    return this.strategy.execute(this.data);
  }
}
