/**
 *
 * | Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+
*/

class RomanNumerals {
  static romObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  static fromRoman(str) {
    const result = str.toUpperCase();
    let answer = 0;

    for (let i = 0; i < result.length; i++) {
      const current = result[i];
      const next = result[i + 1];
      const currValue = this.romObj[current];
      const nextValue = this.romObj[next];
      if (currValue >= nextValue || i === result.length - 1) {
        answer += currValue;
      } else {
        const temp = nextValue - currValue;
        answer += temp;
        i++;
      }
    }
    return answer;
  }
  static numObj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    50: "L",
    40: "XL",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  static getDigit(num, place) {
    // Handle negative numbers by taking the absolute value
    let absNum = Math.abs(num);

    // Shift the number right 'place' times and return the last digit
    return Math.floor(absNum / Math.pow(10, place)) % 10;
  }

  static maxDigits(num) {
    if (num === 0) return 1; // Edge case for 0
    num = Math.abs(num); // Handle negative numbers by taking absolute value
    return Math.floor(Math.log10(num) + 1);
  }
  static appendLetter(noOfTimes, value = "I") {
    let temp = "";
    for (let i = 0; i < noOfTimes; i++) {
      temp += value;
    }
    return temp;
  }
  static handleUnits(value) {
    let answer = "";
    if (value < 4) {
      answer += this.appendLetter(value);
    } else if (value > 5 && value < 9) {
      answer += this.numObj[5];
      answer += this.appendLetter(value - 5);
    } else {
      answer += this.numObj[value];
    }
    return answer;
  }
  static handleTens(value) {
    let answer = "";
    if (value < 40) {
      answer += this.appendLetter(value / 10, "X");
    } else if (value > 50 && value < 90) {
      answer += this.numObj[50];
      answer += this.appendLetter((value - 50) / 10, "X");
    } else {
      answer += this.numObj[value];
    }
    return answer;
  }
  static handleHuns(value) {
    let answer = "";
    if (value < 400) {
      answer += this.appendLetter(value / 100, "C");
    } else if (value > 500 && value < 900) {
      answer += this.numObj[500];
      answer += this.appendLetter((value - 500) / 100, "C");
    } else {
      answer += this.numObj[value];
    }
    return answer;
  }
  static handleThou(value) {
    let answer = "";
    if (value < 4000) {
      answer += this.appendLetter(value / 1000, "M");
    } else if (value > 5000 && value < 9000) {
      answer += this.numObj[5000];
      answer += this.appendLetter((value - 5000) / 1000, "M");
    } else {
      answer += this.numObj[value];
    }
    return answer;
  }
  static toRoman(num) {
    const maxPlace = this.maxDigits(num);
    let answer = "";
    const unit = this.getDigit(num, 0);
    const tens = this.getDigit(num, 1);
    const huns = this.getDigit(num, 2);
    const thou = this.getDigit(num, 3);
    switch (maxPlace) {
      case 1:
        answer += this.handleUnits(num);
        break;
      case 2:
        answer += this.handleTens(tens * 10);
        answer += this.handleUnits(unit);
        break;
      case 3:
        answer += this.handleHuns(huns * 100);
        answer += this.handleTens(tens * 10);
        answer += this.handleUnits(unit);
        break;
      case 4:
        answer += this.handleThou(thou * 1000);
        answer += this.handleHuns(huns * 100);
        answer += this.handleTens(tens * 10);
        answer += this.handleUnits(unit);
        break;
    }
    return answer;
  }
}

RomanNumerals.toRoman(10);
RomanNumerals.toRoman(20);
RomanNumerals.toRoman(10);
RomanNumerals.toRoman(20);
RomanNumerals.toRoman(30);
RomanNumerals.toRoman(40);
RomanNumerals.toRoman(50);
RomanNumerals.toRoman(60);
RomanNumerals.toRoman(70);
RomanNumerals.toRoman(80);
RomanNumerals.toRoman(90);
RomanNumerals.toRoman(99);
RomanNumerals.toRoman(88);
RomanNumerals.toRoman(100);
RomanNumerals.toRoman(101);
RomanNumerals.toRoman(888);
RomanNumerals.toRoman(88);
RomanNumerals.toRoman(1001);
RomanNumerals.toRoman(3000);
RomanNumerals.toRoman(3100);
RomanNumerals.toRoman(3900);
RomanNumerals.toRoman(3999);
RomanNumerals.toRoman(2563);
RomanNumerals.toRoman(4000);
RomanNumerals.toRoman(4004);

/*
Question
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
  86 -> "LXXXVI"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"LXXXVI"  ->   86
"I"       ->    1
Help
+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+
*/

class RomanNumerals {
  static romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  static toRoman(num) {
    let result = "";
    for (const { value, symbol } of this.romanMap) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      const value = this.romObj[str[i]];
      const nextValue = this.romObj[str[i + 1]] || 0;
      result += value < nextValue ? -value : value;
    }
    return result;
  }
}
