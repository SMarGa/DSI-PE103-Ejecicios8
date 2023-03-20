import { Strategy } from "./Strategy";

/**
 * Clase que representa el algoritmo MergeSort
 */
export class MergeSort implements Strategy {
  /**
   *
   * Metodo de ordenación MergeSort
   *
   * @param data Array desordenado
   * @returns Array ordenado
   */
  merge_sort(data: number[]) {
    const halfLength = Math.ceil(data.length / 2);
    let left = data.slice(0, halfLength);
    let right = data.slice(halfLength);
    if (halfLength > 1) {
      left = this.merge_sort(left);
      right = this.merge_sort(right);
    }

    return this.merge(left, right);
  }
  /**
   *
   * Combinación de array
   *
   * @param left Parte derecha
   * @param right Parte izquierda
   * @returns Array conjunto ordenado
   */
  merge(left: number[], right: number[]) {
    let indexLow = 0;
    let indexHigh = 0;
    const lengthLow = left.length;
    const lengthHigh = right.length;
    const combined: number[] = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      const lowItem = left[indexLow];
      const highItem = right[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem <= highItem) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }
    return combined;
  }

  execute(data: number[]) {
    return this.merge_sort(data);
  }
}
