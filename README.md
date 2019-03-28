
## How to run tests

```
npm i
->
npm run cypress:open
or
npm run test
```

### Improvements to store and randomise customer data

- Create class where we to store all randomise data

```js
import generateRandoms from '../utils/GetRandomString';
   
   const newCustomer = {
       firstName: `customer-first-${generateRandoms()}`,
       bithYear: `customer-bithYear-${generateRandoms()}`,
       lastName: `customer-last-${generateRandoms()}`,
       email: `customerAutoTest${generateRandoms()}@alefeducation.com`,
       password: '12345',
       phoneNumber: `+49${generateRandoms()}`
   };
   
   export default newCustomer;
```
- that use it into one of Page object class

```js
   import ContactInformation from "./ContactInformation";
   import credentials from '../../fixtures/newInstructor';
   
   export default class PersonalInformation {
   
       fillInPersonalInfo() {
           this.enterFirstName(credentials.firstName);
           this.enterLastName(credentials.lastName);
           this.selectBirthYear('1981');
           return new ContactInformation();
       }
   }
```

### Next step store date into json

...

#### Testing [task](https://github.com/Ebazhanov/cypresss/blob/master/TestingTask.md)

Build status | Description | YML
:--- | :--- | :---
[![CircleCI](https://circleci.com/gh/Ebazhanov/cypresss.svg?style=svg)](https://circleci.com/gh/Ebazhanov/cypresss) | Linux (CircleCI) | [circle.yml](circle.yml)

