import { BmiUtil } from './services/bmi-util';

const bmiUtil = new BmiUtil('./data/data.json', './data/result.json');
bmiUtil.initPipeline();
bmiUtil.readPipeline?.on('end', () => {
  console.log(`Total overweight number is ${bmiUtil.totalOverWeight}`);
});
