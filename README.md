
## Run tests

```
npm i
->
npm run cypress:open
or
npm run test
```

Build status | Description | YML
:--- | :--- | :---
[![CircleCI](https://circleci.com/gh/Ebazhanov/cypresss.svg?style=svg)](https://circleci.com/gh/Ebazhanov/cypresss) | Linux (CircleCI) | [circle.yml](circle.yml)

Please implement an E2E test using the Cypress framework, which is going to test the COMATCH consultant registration flow. Please make the tests run against our staging environment available here:

https://staging.comatch.com/en/registry/consultant
(Basic auth: comatch / Do$enb1er)

In the test please EXCLUDE the "Support" functionality (statically positioned green button at the right top position of the viewport)

The consultant registration flow begins on the mentioned URL and includes multiple steps 
- (multiple different pages). 
The scope and level of detail of the test would be up to you, 
however I would prefer if you can cover at least 2 different steps 
(even if step 2 for example is covered only a little bit) 
and focus more on details (e.g. 

	- validation of individual fields, ![#c5f015](https://placehold.it/15/c5f015/000000?text=+)``` done```
	- file uploads, ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) ``` in progress```
	- various edge cases that you can come up with, ![#c5f015](https://placehold.it/15/c5f015/000000?text=+)```partially done```
	- etc.). 

The tests should run on CircleCI ![#c5f015](https://placehold.it/15/c5f015/000000?text=+)```done```

- I would also like you to configure it, so that when a test fails, there will be screenshots available as Artifacts, for later debugging purpose.

Also the code should NOT be public (e.g. you can use a private GitHub repo, which is now also available for personal (free) plans)

The final code / configuration will be evaluated against the following criteria:
- code readability (is it easy to understand and modify, is it well organized ?) ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) ```done```
- stability (does it randomly fail 1 out of 10 runs?) ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) ```done```
- time (does it take unnecessarily long due to frequent waits/sleeps, etc.) ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) ```done```

As mentioned, I will be rather interested to see technical ability / creative ideas and good structure as opposed to having covered the entire flow. So the focus in this tasks should be on quality rather than quantity. 