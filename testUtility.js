// testDataUtils.js

/**
 * Capitalizes the first character of a string.
 * Usage: capitalize("john") → "John"
 */
function capitalize(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Picks a random item from a non-empty array.
 * Usage: pick([1,2,3]) → 2
 */
function pick(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Expected non-empty array");
  }
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generates a random lowercase letter string.
 * Usage: getRandomLetters(4) → "abcz"
 */
function getRandomLetters(length = 5) {
  if (typeof length !== "number" || length <= 0) {
    throw new Error("Length must be a positive number");
  }
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

/**
 * Generates a random first name.
 * Usage: getRandomFirstName() → "Wendy"
 */
function getRandomFirstName() {
  return capitalize(getRandomLetters(3 + Math.floor(Math.random() * 5)));
}

/**
 * Generates a random last name.
 * Usage: getRandomLastName() → "OShea"
 */
function getRandomLastName() {
  return capitalize(getRandomLetters(4 + Math.floor(Math.random() * 6)));
}

/**
 * Generates a random alphanumeric string.
 * Usage: getRandomString(8) → "a1b2c3d4"
 */
function getRandomString(length = 8) {
  if (typeof length !== "number" || length <= 0) {
    throw new Error("Length must be a positive number");
  }
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Simulates a US cell number (XXX) XXX-XXXX.
 * Usage: getUSCellNumber() → "(512) 345-6789"
 */
function getUSCellNumber() {
  const area = Math.floor(200 + Math.random() * 800);
  const mid = Math.floor(100 + Math.random() * 900);
  const end = Math.floor(1000 + Math.random() * 9000);
  return `(${area}) ${mid}-${end}`;
}

/**
 * Alias for getUSCellNumber (phone number).
 */
function getUSPhoneNumber() {
  return getUSCellNumber();
}

/**
 * Generates a random US-style address.
 * Usage: getUSAddress() → "1234 Oak Ave Unit 5, Houston, TX"
 */
function getUSAddress() {
  const streets = ["Main St", "Oak Ave", "Pine Dr", "Maple Blvd"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
  const states = ["NY", "CA", "IL", "TX"];
  const number = Math.floor(1 + Math.random() * 9999);
  const unit = `Unit ${Math.ceil(Math.random() * 20)}`;
  return `${number} ${pick(streets)} ${unit}, ${pick(cities)}, ${pick(states)}`;
}

/**
 * Generates a 5-digit US ZIP code.
 * Usage: getRandomZipCode() → "48219"
 */
function getRandomZipCode() {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

/**
 * Generates a synthetic email address.
 * Usage: getRandomEmail() → "mary42@example.com"
 */
function getRandomEmail() {
  return `${getRandomFirstName().toLowerCase()}${Math.floor(Math.random() * 100)}@example.com`;
}

/**
 * Returns today’s date in YYYY-MM-DD format.
 * Usage: getTodayDate() → "2025-07-07"
 */
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

/**
 * Returns a random date within ±offsetDays of today.
 * Usage: getRandomDate(15) → "2025-06-25"
 */
function getRandomDate(offsetDays = 30) {
  const date = new Date();
  date.setDate(
    date.getDate() + Math.floor(Math.random() * offsetDays * 2) - offsetDays
  );
  return date.toISOString().split("T")[0];
}

/**
 * Returns an object with start/end dates separated by offsets.
 * Usage: getDateRange(0,7) → {start:"2025-07-07", end:"2025-07-14"}
 */
function getDateRange(startOffset = 0, endOffset = 7) {
  const start = new Date();
  const end = new Date();
  start.setDate(start.getDate() + startOffset);
  end.setDate(end.getDate() + endOffset);
  return {
    start: start.toISOString().split("T")[0],
    end: end.toISOString().split("T")[0],
  };
}

/**
 * Returns a random timestamp (ISO string).
 * Usage: getRandomTimestamp() → "2025-02-10T12:34:56.789Z"
 */
function getRandomTimestamp() {
  return new Date(Date.now() - Math.floor(Math.random() * 1e10)).toISOString();
}

/**
 * Generates a random payment amount between min and max with two decimals.
 * Usage: getPaymentAmount(10,20) → "15.23"
 */
function getPaymentAmount(min = 10, max = 20) {
  if (min < 0 || max < min) {
    throw new Error("Invalid min/max values");
  }
  return (Math.random() * (max - min) + min).toFixed(2);
}

/**
 * Formats a number as US currency.
 * Usage: toCurrency(15.5) → "$15.50"
 */
function toCurrency(value) {
  return `$${parseFloat(value).toFixed(2)}`;
}

/**
 * Validates US phone format (XXX) XXX-XXXX.
 * Usage: validateUSPhoneNumber("(512) 345-6789") → true
 */
function validateUSPhoneNumber(num) {
  return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(num);
}

/**
 * Checks if a string has only alphabetic letters.
 * Usage: isAlphaOnly("TestName") → true
 */
function isAlphaOnly(str) {
  return /^[A-Za-z]+$/.test(str);
}

/**
 * Checks if a value is null, undefined, or empty string.
 * Usage: isEmpty("") → true
 */
function isEmpty(val) {
  return val === null || val === undefined || val === "";
}

/**
 * Returns a Promise that resolves after ms milliseconds.
 * Usage: await wait(500) // pause for 0.5s
 */
function wait(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a UUID v4 string.
 * Usage: generateUUID() → "3b12f1df-5232-4d02-9f48-2b6b8f6e5a3c"
 */
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Returns a random user role from a preset list.
 * Usage: getRandomUserRole() → "editor"
 */
function getRandomUserRole() {
  return pick(["admin", "editor", "viewer", "moderator", "guest"]);
}

/**
 * Generates a strong random password including symbols.
 * Usage: getRandomPassword(12) → "aB#1xY!9Gh2"
 */
function getRandomPassword(length = 10) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  return Array.from({ length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

/**
 * Encodes a string into Base64.
 * Usage: encodeBase64("hello") → "aGVsbG8="
 */
function encodeBase64(str) {
  return Buffer.from(str, "utf-8").toString("base64");
}

/**
 * Combines first and last names into a properly capitalized full name.
 * Usage: formatFullName("john","doe") → "John Doe"
 */
function formatFullName(first, last) {
  return `${capitalize(first)} ${capitalize(last)}`;
}

/**
 * Generates a complete user profile object with random data.
 * Usage: generateUserProfile() → {id: "...", firstName: "...", ...}
 */
function generateUserProfile() {
  const first = getRandomFirstName();
  const last = getRandomLastName();
  return {
    id: generateUUID(),
    firstName: first,
    lastName: last,
    fullName: formatFullName(first, last),
    email: getRandomEmail(),
    phone: getUSCellNumber(),
    address: getUSAddress(),
    zip: getRandomZipCode(),
    role: getRandomUserRole(),
    password: getRandomPassword(),
  };
}

/**
 * Returns pagination params for APIs: page, limit, offset.
 * Usage: getPaginationParams(2, 25) → {page:2, limit:25, offset:25}
 */
function getPaginationParams(page = 1, perPage = 10) {
  return {
    page,
    limit: perPage,
    offset: (page - 1) * perPage,
  };
}

/**
 * Splits an array into chunks of given size.
 * Usage: chunkArray([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
 */
function chunkArray(arr, size) {
  if (!Array.isArray(arr) || size <= 0) {
    throw new Error("Invalid arguments");
  }
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (_, i) => arr.slice(i * size, i * size + size)
  );
}

/**
 * Converts text into a URL-friendly slug.
 * Usage: slugify("Hello World!") → "hello-world"
 */
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

/**
 * Returns a random common MIME type (for file upload tests).
 * Usage: getRandomMimeType() → "application/pdf"
 */
function getRandomMimeType() {
  return pick([
    "image/png",
    "application/pdf",
    "text/plain",
    "image/jpeg",
    "application/json",
  ]);
}

/**
 * Generates an invalid email for negative tests.
 * Usage: getInvalidEmail() → "user@@abcd.com"
 */
function getInvalidEmail() {
  return `user@@${getRandomString(4)}.com`;
}

/**
 * Generates an invalid phone string for negative tests.
 * Usage: getInvalidPhoneNumber() → "1234-abc-defg"
 */
function getInvalidPhoneNumber() {
  return `${Math.random().toString().slice(2, 6)}-abc-defg`;
}

/**
 * Generates an invalid ZIP code for negative tests.
 * Usage: getInvalidZipCode() → "ABCDE"
 */
function getInvalidZipCode() {
  return "ABCDE";
}

/**
 * Generates a Luhn-valid test credit card number.
 * Usage: generateTestCreditCard() → "4000001234567898"
 */
function generateTestCreditCard() {
  const base =
    "400000" + Math.floor(100000000 + Math.random() * 900000000).toString();
  return base + luhnChecksumDigit(base);
}

/**
 * Calculates Luhn checksum digit for a number string.
 * Usage: luhnChecksumDigit("400000123456789") → 8
 */
function luhnChecksumDigit(number) {
  let sum = 0;
  let doubleIt = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let n = +number[i];
    if (doubleIt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    doubleIt = !doubleIt;
  }
  return (10 - (sum % 10)) % 10;
}

/**
 * Returns a random CSS hex color.
 * Usage: getRandomHexColor() → "#3a5fcd"
 */
function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
}

/**
 * Returns a random RGB color string.
 * Usage: getRandomRGBColor() → "rgb(123,45,67)"
 */
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

/**
 * Generates a random latitude/longitude pair.
 * Usage: getRandomLatLong() → {lat: 12.34, long: -56.78}
 */
function getRandomLatLong() {
  const lat = (Math.random() * 180 - 90).toFixed(6);
  const long = (Math.random() * 360 - 180).toFixed(6);
  return { lat: parseFloat(lat), long: parseFloat(long) };
}

/**
 * Generates a random IPv4 address.
 * Usage: getRandomIPAddress() → "192.168.12.5"
 */
function getRandomIPAddress() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".");
}

/**
 * Generates a random MAC address.
 * Usage: getRandomMACAddress() → "ae:23:bc:4f:90:11"
 */
function getRandomMACAddress() {
  return Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
  ).join(":");
}

/**
 * Returns a random date of birth string so age is between minAge and maxAge.
 * Usage: getRandomDOB(18,65) → "1984-11-23"
 */
function getRandomDOB(minAge = 18, maxAge = 65) {
  if (minAge < 0 || maxAge < minAge) throw new Error("Invalid age range");
  const daysMin = maxAge * 365;
  const daysMax = minAge * 365;
  const offset = Math.floor(Math.random() * (daysMin - daysMax) + daysMax);
  const dob = new Date(Date.now() - offset * 24 * 60 * 60 * 1000);
  return dob.toISOString().split("T")[0];
}

/**
 * Returns a future date relative to today.
 * Usage: getFutureDate(10) → "2025-07-17"
 */
function getFutureDate(daysAhead = 1) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split("T")[0];
}

/**
 * Returns a past date relative to today.
 * Usage: getPastDate(10) → "2025-06-27"
 */
function getPastDate(daysBack = 1) {
  const d = new Date();
  d.setDate(d.getDate() - daysBack);
  return d.toISOString().split("T")[0];
}

/**
 * Generates a random US Social Security Number.
 * Usage: getRandomSSN() → "123-45-6789"
 */
function getRandomSSN() {
  const part1 = Math.floor(100 + Math.random() * 900);
  const part2 = Math.floor(10 + Math.random() * 90);
  const part3 = Math.floor(1000 + Math.random() * 9000);
  return `${part1}-${part2}-${part3}`;
}

/**
 * Generates a random CVV code (3 or 4 digits).
 * Usage: getRandomCVV(4) → "1234"
 */
function getRandomCVV(length = 3) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

/**
 * Generates a future credit card expiry date in MM/YY.
 * Usage: getRandomCreditCardExpiry() → "08/29"
 */
function getRandomCreditCardExpiry() {
  const nowYear = new Date().getFullYear() % 100;
  const year = nowYear + Math.floor(Math.random() * 6) + 1;
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  return `${month}/${year.toString().padStart(2, "0")}`;
}

/**
 * Generates a simple fake IBAN for testing.
 * Usage: getRandomIBAN("DE") → "DE89ABCD12345678"
 */
function getRandomIBAN(countryCode = "GB") {
  const checks = Math.floor(10 + Math.random() * 90);
  const bban = getRandomString(12).toUpperCase();
  return `${countryCode}${checks}${bban}`;
}

/**
 * Generates a random filename with given extension.
 * Usage: getRandomFileName("pdf") → "file_8349.pdf"
 */
function getRandomFileName(ext = "txt") {
  return `file_${Math.floor(Math.random() * 10000)}.${ext}`;
}

/**
 * Returns lorem ipsum placeholder text with given sentence count.
 * Usage: getLoremIpsum(2) → "Lorem ipsum... Ut enim..."
 */
function getLoremIpsum(sentences = 1) {
  const lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ];
  return Array.from({ length: sentences }, () => pick(lorem)).join(" ");
}

/**
 * Returns a random User-Agent string from common browsers.
 * Usage: getRandomUserAgent() → "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
 */
function getRandomUserAgent() {
  const agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
      + " Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
      + " AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X)"
      + " AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1"
  ];
  return pick(agents);
}

// Export all utilities
module.exports = {
  capitalize,
  pick,
  getRandomLetters,
  getRandomFirstName,
  getRandomLastName,
  getRandomString,
  getUSCellNumber,
  getUSPhoneNumber,
  getUSAddress,
  getRandomZipCode,
  getRandomEmail,
  getTodayDate,
  getRandomDate,
  getDateRange,
  getRandomTimestamp,
  getPaymentAmount,
  toCurrency,
  validateUSPhoneNumber,
  isAlphaOnly,
  isEmpty,
  wait,
  generateUUID,
  getRandomUserRole,
  getRandomPassword,
  encodeBase64,
  formatFullName,
  generateUserProfile,
  getPaginationParams,
  chunkArray,
  slugify,
  getRandomMimeType,
  getInvalidEmail,
  getInvalidPhoneNumber,
  getInvalidZipCode,
  generateTestCreditCard,
  luhnChecksumDigit,
  getRandomHexColor,
  getRandomRGBColor,
  getRandomLatLong,
  getRandomIPAddress,
  getRandomMACAddress,
  getRandomDOB,
  getFutureDate,
  getPastDate,
  getRandomSSN,
  getRandomCVV,
  getRandomCreditCardExpiry,
  getRandomIBAN,
  getRandomFileName,
  getLoremIpsum,
  getRandomUserAgent
};
