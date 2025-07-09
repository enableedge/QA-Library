# Test Utility JS

A comprehensive JavaScript utility library for generating random test data, validating formats, and supporting automated testing. Ideal for QA engineers, developers, and anyone needing mock data for testing APIs, forms, or applications.

## Features

- **Random Data Generators:**
  - Names, emails, phone numbers, addresses, ZIP codes, user profiles
  - Dates, timestamps, date ranges, DOB, future/past dates
  - Payment amounts, credit card numbers (Luhn-valid), CVV, expiry, IBAN
  - Colors (hex, RGB), IP/MAC addresses, latitude/longitude
  - Passwords, UUIDs, file names, lorem ipsum, user agents
- **Validation & Formatting:**
  - US phone number validation
  - Currency formatting
  - Slugify, Base64 encoding
  - Alpha-only, empty checks
- **Array & String Utilities:**
  - Chunking, picking random items, capitalization
- **Miscellaneous:**
  - Wait (delay), pagination params, MIME types, invalid data generators

## Installation

Copy `testUtility.js` into your project and require it:

```js
const utils = require('./testUtility');
```

## Usage Examples

```js
const { getRandomFirstName, getRandomEmail, getUSCellNumber, generateUserProfile } = require('./testUtility');

console.log(getRandomFirstName()); // "John"
console.log(getRandomEmail()); // "mary42@example.com"
console.log(getUSCellNumber()); // "(512) 345-6789"
console.log(generateUserProfile());
// { id: ..., firstName: ..., ... }
```

### Data Generators
- `getRandomFirstName()`, `getRandomLastName()`, `getRandomEmail()`, `getUSCellNumber()`, `getUSAddress()`, `getRandomZipCode()`, `generateUserProfile()`
- `getRandomDate(offsetDays)`, `getDateRange(startOffset, endOffset)`, `getRandomDOB(minAge, maxAge)`, `getFutureDate(daysAhead)`, `getPastDate(daysBack)`
- `getPaymentAmount(min, max)`, `generateTestCreditCard()`, `getRandomCVV(length)`, `getRandomCreditCardExpiry()`, `getRandomIBAN(countryCode)`
- `getRandomHexColor()`, `getRandomRGBColor()`, `getRandomLatLong()`, `getRandomIPAddress()`, `getRandomMACAddress()`
- `getRandomPassword(length)`, `generateUUID()`, `getRandomFileName(ext)`, `getLoremIpsum(sentences)`, `getRandomUserAgent()`

### Validation & Formatting
- `validateUSPhoneNumber(num)`, `toCurrency(value)`, `slugify(str)`, `encodeBase64(str)`, `isAlphaOnly(str)`, `isEmpty(val)`, `formatFullName(first, last)`

### Array & String Utilities
- `capitalize(str)`, `pick(array)`, `chunkArray(arr, size)`, `getRandomLetters(length)`, `getRandomString(length)`

### Miscellaneous
- `wait(ms)`, `getPaginationParams(page, perPage)`, `getRandomMimeType()`, `getInvalidEmail()`, `getInvalidPhoneNumber()`, `getInvalidZipCode()`

## License
MIT License. Free to use and modify.
