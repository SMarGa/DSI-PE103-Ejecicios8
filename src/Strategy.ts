/**
 * Interfaz que determina la estrategia
 */
export interface Strategy {
  execute(data: number[]): void;
}
