import fs from 'fs';
import { IPhysical, Physical } from '../common/physical';
import { PhysicalResult } from '../common/physical-result';

export class BmiUtil {
  readPath: string;
  writePath: string;
  iPyhsicalList: IPhysical[] = [];

  constructor(readPath: string, writePath: string) {
    this.readPath = readPath;
    this.writePath = writePath;
  }

  read(): void {
    const stream = fs.createReadStream(this.readPath, {
      highWaterMark: 150 * 1024,
      encoding: 'utf8',
    });

    stream.on('data', (chunk: IPhysical[]) => {
      const buffer = JSON.parse(chunk.toString());

      this.iPyhsicalList = this.iPyhsicalList.concat(buffer);
      console.log(this.iPyhsicalList, 'inside func');
    });
    console.log(this.iPyhsicalList, 'outside func');
  }

  write(): void {
    //Create the new list and calc the BMI, category and risk
    console.log(this.iPyhsicalList);

    const physicalList: Physical[] = this.iPyhsicalList.map(
      (p) => new Physical(p)
    );
    console.log(physicalList.length);

    const physicalResult = new PhysicalResult(physicalList);
    const stream = fs.createWriteStream(this.writePath, {
      encoding: 'utf8',
    });

    stream.write(JSON.stringify(this.iPyhsicalList));
  }

  // read(readPath = this.readPath): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(this.readPath, 'utf8', (err, data) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(data);
  //       }
  //     });
  //   });
  // }

  // write(data: string, writePath = this.writePath): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     fs.writeFile(writePath, data, (err) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // }
}
