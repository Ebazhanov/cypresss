
## How to run tests

```
npm i
->
npm run cypress:open
or
npm run test
```

In Docker
---------

- to download image
```
docker-compose build
```

- to run the tests in docker
```
docker-compose run cypress
```
or
```
docker-compose up
```

- to print all existing docker images
```
docker images
```

- clean all existing docker images
```
docker system prune --volumes -a
```

- go inside docker 
```
docker run --rm -it your_image_here bash
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

