import fs from 'fs';
import Chain, { chain } from 'stream-chain';
import { parser } from 'stream-json';
import { streamArray } from 'stream-json/streamers/StreamArray';
import { IPhysical, Physical } from '../common/physical';
import { IBmiRecord } from '../common/bmi-record';
import { BmiCategory } from '../common/types/bmi-category';

export class BmiUtil {
  totalOverWeight: number = 0;
  readPath: string;
  writePath: string;
  readPipeline?: Chain;

  constructor(readPath: string, writePath: string) {
    this.readPath = readPath;
    this.writePath = writePath;
  }

  initPipeline(): void {
    this.readPipeline = chain([
      fs.createReadStream(this.readPath),
      parser(),
      streamArray(),
      (obj: any) => this.transform(obj),
      fs.createWriteStream(this.writePath),
    ]);

    this.readPipeline.on('end', () => {
      fs.appendFile(this.writePath, ']', function (err) {
        if (err) throw err;
      });
    });
  }

  transform(bmiRecord: IBmiRecord): string {
    const newIPhysical: IPhysical = bmiRecord.value;
    const physical = new Physical(newIPhysical);
    if (physical.BmiCategory === BmiCategory.OverWeight) this.totalOverWeight++;
    bmiRecord.value = physical;

    if (bmiRecord.key === 0) {
      return `[${JSON.stringify(bmiRecord.value)}`;
    }
    return `,${JSON.stringify(bmiRecord.value)}`;
  }
}
