# Roman Literals Exercise

## Approach

To make the algorithm easier to follow I decided to add the 'IX' or 'VI' values as well in my array of roman literals and also the on containing the numbers. The challenge is to know when add and when to subtract, but having those values as well helps a lot, especially as they are aranged from high -> low

*   toRoman -> iterates over all numbers and builds up roman literal while input value is bigger than the a number;
*   *   Big O: O(1 \* n); the numbers array is constant; the number to check is less than 4000, but let's assume it can be bigger, thus:
*   *   O(n) - n length of the number
*   toArabic -> iterates again over the numbers, and checks if the input has as a substring one of the values from the roman literals array, but maintaing the same index. If it does it adds to the result and removes the found substring;
*   *   Same worst case scenario as for toRoman: O(n) - n length of the string

### Prerequisites

```
 nodejs - LTS version
```

### Use app

```
npm install / yarn install
npm test (optional)
npm start / yarn start
    - start will trigger 2 nodejs processes on 3000 (client) and 3001 (api)
Navigate to `localhost:3000` and follow the instructions
    - type in either a number or a roman literal (there are validation in place to check of valid input)
```

### To Improve

```
- Modularize more the app into custom made components (Input / Button)
- Integrate a state manangement if the app becomes larger - no need for one at this moment
- Create a `testRomanLiteral` lib to be used accros client / server
- Ideally this client should not bundled up with the server
```
