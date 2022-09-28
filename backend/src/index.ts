import { BmiUtil } from './services/bmi-util';

const bmiUtil = new BmiUtil('./data/data.json', './data/result.json');

bmiUtil.read();