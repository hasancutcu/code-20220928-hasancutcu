import { Physical } from './physical';
import { BmiCategory } from './types/bmi-category';

export class PhysicalResult {
  totalOverWeight: number = 0;
  list: Physical[] = [];

  constructor(list: Physical[]) {
    this.list = list;
    this.totalOverWeight = this.calculateTotalOverWeight();
  }

  calculateTotalOverWeight(): number {
    return this.list.filter((p) => p.BmiCategory === BmiCategory.OverWeight)
      .length;
  }
}
