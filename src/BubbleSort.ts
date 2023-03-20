import { Strategy } from "./Strategy";

/**
 * Clase que representa el algoritmo BubbleSort
 */
export class BubbleSort implements Strategy {
  /**
   *
   * Metodo de ordenación BubbleSort
   *
   * @param data Array desordenado
   * @returns Array ordenado
   */
  execute(data: number[]) {
    let swaped = true;
    while (swaped) {
      swaped = false;
      for (let i = 1; i < data.length; i++) {
        if (data[i - 1] > data[i]) {
          const aux_num = data[i - 1];
          data[i - 1] = data[i];
          data[i] = aux_num;
          swaped = true;
          console.log("Cambio");
        }
      }
    }
    return data;
  }
}
