//PROBLEM 2
"use strict";
const ones = 
  ["", "one", "two", "three", "four", 
   "five", "six", "seven", "eight", "nine"];
const teens = 
  ["ten", "eleven", "twelve", "thirteen", "fourteen", 
   "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = 
  ["", "", "twenty", "thirty", "forty", "fifty",
   "sixty", "seventy", "eighty", "ninety"];
const placeNames = ["", "", " thousand, ", " million, "];
const threeDigitNumToWord = (hundredsDigit, tensDigit, onesDigit) =>
{
  const hundredWord = hundredsDigit ? ones[hundredsDigit] + " hundred" : "";
  const teensWord = (tensDigit === 1) ? teens[onesDigit] :  "";
  const tensWord = (tensDigit > 1) ? tens[tensDigit] : "";
  const andWord = 
    (hundredWord !== "" && (teensWord !== "" || tensWord !== "")) ? 
      " and " : "";
  const onesWord = !(teensWord) ? ones[onesDigit] : "";
  const hyphen = (tensWord && onesWord) ?  "-" : "";

  return hundredWord + andWord + teensWord + tensWord + hyphen + onesWord;
};

const numberToWords = (num) =>
{
  if (num === 0) return "Zero";

  const str = num.toString();
  const array = str.split(""); 
  const decimalPointIndex = array.findIndex((e) => e === "."); 
  const cents = decimalPointIndex !== -1 ? 
    " and " + array.slice(decimalPointIndex + 1, array.length).join("") 
    + "/100" : "";
 
  const arrayNoDec = decimalPointIndex !== -1 ? 
    array.slice(0, decimalPointIndex) : array;
  const numArray = arrayNoDec.map(digit=>parseInt(digit));
  const numDigits = numArray.length;  
  const startPlace = Math.ceil(numDigits/3);

  const traverseByThreeDigits = (numArray, placesCount) =>
  {
    if (numArray.length > 0)
    {
      const threeDigits = numArray.slice(0, 3);
      const nextWords = threeDigitNumToWord(...threeDigits);
      const pName = placeNames[placesCount];
      words += nextWords ? nextWords + pName : "";
      const nextThreeDigits = numArray.slice(3, numDigits);
      traverseByThreeDigits(nextThreeDigits, placesCount - 1);
    }
  };
  let words = "";
  const numHighestOrderDigits = numDigits % 3;

  if (numHighestOrderDigits > 0 && numDigits > 3)
  {
    const padAmount = 3 - numHighestOrderDigits;
    const highestOrderDigits = numArray.slice(0, numHighestOrderDigits);
    const paddedFirstSet = Array(padAmount).fill(0).concat(highestOrderDigits);
    words += threeDigitNumToWord(...paddedFirstSet)
      + placeNames[startPlace];    
    traverseByThreeDigits(numArray.slice(numHighestOrderDigits), 
      startPlace-1);
  }
  else if (numDigits < 3)
  {
    const padAmount = 3 - numHighestOrderDigits;
    const highestOrderDigits = numArray.slice(0, numHighestOrderDigits);
    const paddedFirstSet = Array(padAmount).fill(0).concat(highestOrderDigits);
    words += threeDigitNumToWord(...paddedFirstSet); 
  }
  else
  {
    traverseByThreeDigits(numArray, startPlace);
  }

  const trimmedWords = words.replace(/^[,\s]+|[,\s]+$/g, "")
    .replace(/,[,\s]*,/g, ",");
  const dollarsCents = trimmedWords + cents;
  const upperCase = dollarsCents.charAt(0).toUpperCase() + 
    dollarsCents.substring(1);
  return upperCase;
};

module.exports = numberToWords;
