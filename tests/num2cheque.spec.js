"use strict";
const test = require("tape").test;
const numberToWords = require( "../lib/num2cheque.js");

test("numberToWords", (t) =>
{ 
  {
    const actual = numberToWords(0);
    const expected = "Zero";
    t.deepEqual(actual, expected);
  }
  
  {
    const actual = numberToWords(1);
    const expected = "One";
    t.deepEqual(actual, expected);
  }
  
  {
    const actual = numberToWords(10);
    const expected = "Ten";
    t.deepEqual(actual, expected);
  }
  
  {
    const actual = numberToWords(100);
    const expected = "One hundred";
    t.deepEqual(actual, expected);
  }

  {
    const actual = numberToWords(120);
    const expected = "One hundred and twenty";
    t.deepEqual(actual, expected);
  }

  {
    const actual = numberToWords(1000);
    const expected = "One thousand";
    t.deepEqual(actual, expected);
  } 

  {
    const actual = numberToWords(1120);
    const expected = "One thousand, one hundred and twenty";
    t.deepEqual(actual, expected);
  }
 
  {
    const actual = numberToWords(1000000);
    const expected = "One million";
    t.deepEqual(actual, expected);
  }

  {
    const actual = numberToWords(1545120);
    const expected = "One million, five hundred and forty-five"  
      + " thousand, one hundred and twenty";
    t.deepEqual(actual, expected);
  }
  
  {
    const actual = numberToWords(999999999.99);
    const expected =
    "Nine hundred and ninety-nine million, " 
    + "nine hundred and ninety-nine thousand, "
    + "nine hundred and ninety-nine and 99/100";
    t.deepEqual(actual, expected);
  }

  {
    const actual = numberToWords(245.13);
    const expected = "Two hundred and forty-five and 13/100";
    t.deepEqual(actual, expected);
  }
  t.end();
});

