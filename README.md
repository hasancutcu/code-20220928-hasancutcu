# Backend Task

```
[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female",
"HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
{"Gender": "Female","HeightCm": 167, "WeightKg": 82}]
```

is given format of a json file that store physical info about a person to calc BMI and Health risk.
Objectives are as follow <sub>(copied from the org. document)</sub>
<br/>

> Calculate Bmi, Bmi Categorty and Health Risk add those to the json file.

> Count the total number of overweight people using ranges in the column BMI Category of
> Table 1, check this is consistent programmatically and add any Other observations in the
> documentation

> Create build, tests to make sure the code is working as expected and this can be added to an
> automation build / test / deployment pipeline

<br/>

### Formula 1 - Calculation of BMI <sub>(copied from the org. document) </sub>

> 2 2 BMI(kg/m ) = mass(kg) / height(m)
> The BMI (Body Mass Index) in (kg/m) is equal to the weight in kilograms (kg) divided by your height in
> meters squared (m)2 For example, if you are 175cm (1.75m) in height and 75kg in weight, you can
> calculate your BMI as follows: 75kg / (1.75m2) = 24.49kg/m2.

### Table 1

<img width="816" alt="table1" src="https://user-images.githubusercontent.com/73205794/192788834-4248c3f7-ee43-4877-950b-8740abfe6796.png">

<br/>

> - Write a solid production grade typescript/javascript Program to solve this problem, imagine this will be used in product for 1 Lac patients.We are only interested in a standalone backend application, we are NOT expecting a UI, webpage, frontend, Mobile App, microsite etc. We want to see what optimal solution you come up with to scale for larger JSON data and perform calculations quickly and write the output efficiently. Feel free to explore and use the standard Node libraries or any open source node modules
> - Automate the setup, build, test, package and run using your favourite tools

## Installation and Usage

If nodejs is not installed, install it from [here](https://nodejs.org/en/download/)

To clone the repo and run it locally, run the following commands in your terminal

```bash
gh repo clone hasancutcu/code-20220928-hasancutcu
cd code-20220928-hasancutcu/backend
npm run start:dev
```

In terminal, you should see the following output;

```bash
Total overweight number is 'XX'
```

To see new json file with the new 3 fields, you can check './backend/data/result.json' file.

To test with over 500000 records, you can use this file './backend/data/bigdata.json'