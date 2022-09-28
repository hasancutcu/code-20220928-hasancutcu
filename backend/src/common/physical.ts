import { BmiCategory } from './types/bmi-category';
import { HealthRisk } from './types/health-risk';

export interface IPhysical {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
}

export class Physical implements IPhysical {
  Gender: string;
  HeightCm: number;
  WeightKg: number;
  BMI?: number;
  BmiCategory?: BmiCategory;
  HealthRisk?: HealthRisk;

  constructor(physical: IPhysical) {
    this.Gender = physical.Gender;
    this.HeightCm = physical.HeightCm;
    this.WeightKg = physical.WeightKg;
    this.BMI = this.calculateBMI();
    this.setBmiCategoryAndHealthRisk();
  }

  calculateBMI(): number {
    return this.WeightKg / Math.pow(this.HeightCm / 100, 2);
  }
  setBmiCategoryAndHealthRisk(): void {
    if (this.BMI === undefined) return;
    if (this.BMI <= 18.4) {
      this.BmiCategory = BmiCategory.UnderWeight;
      this.HealthRisk = HealthRisk.MalnutritionRisk;
    } else if (this.BMI <= 24.9) {
      this.BmiCategory = BmiCategory.NormalWeight;
      this.HealthRisk = HealthRisk.LowRisk;
    } else if (this.BMI <= 29.9) {
      this.BmiCategory = BmiCategory.OverWeight;
      this.HealthRisk = HealthRisk.EnhancedRisk;
    } else if (this.BMI <= 34.9) {
      this.BmiCategory = BmiCategory.ModeratelyObese;
      this.HealthRisk = HealthRisk.MediumRisk;
    } else if (this.BMI <= 39.9) {
      this.BmiCategory = BmiCategory.SeverelyObese;
      this.HealthRisk = HealthRisk.HighRisk;
    } else {
      this.BmiCategory = BmiCategory.VerySeverelyObese;
      this.HealthRisk = HealthRisk.VeryHighRisk;
    }
  }
}
