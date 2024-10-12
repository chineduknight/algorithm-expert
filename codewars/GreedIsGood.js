/** Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point */

function scoreFirstSolution(dice) {
  const values = [0, 1000, 200, 300, 400, 500, 600];
  const valueOne = {
    1: 100,
    5: 50,
  };
  const feqCounter = {};
  dice.forEach((current) => {
    feqCounter[current] = (feqCounter[current] || 0) + 1;
  });
  console.log("feqCounter:", feqCounter);
  let result = 0;
  for (const num in feqCounter) {
    // console.log("num:", num);
    if (Object.hasOwnProperty.call(feqCounter, num)) {
      let curVal = feqCounter[num];
      if (curVal >= 3) {
        console.log("curVal:", curVal);
        result += values[num];
        console.log("result:", result);
        curVal -= 3;
        if (+num === 1 || +num === 5) {
          if (curVal > 0) {
            result += valueOne[num];
            curVal -= 1;
          }
          if (curVal > 0) {
            result += valueOne[num];
            curVal -= 1;
          }
        }
        // while (curVal > 0) {
        //   result+=
        // }
      }
      // console.log("num:", num === 5);
      if (+num === 1 || +num === 5) {
        console.log("I ran---", curVal);
        if (curVal > 0) {
          result += valueOne[num];
          curVal -= 1;
        }
        console.log("I ran---", curVal);
        if (curVal > 0) {
          console.log("second running....");
          result += valueOne[num];
          curVal -= 1;
        }
      }
    }
  }
  console.log("result:", result);
  return result;
}
// score([2, 3, 4, 6, 2]);
// score([4, 4, 4, 3, 3]);
// score([2, 4, 4, 5, 4]);
score([5, 5, 5, 4, 5]); //550

// Cleaned up solution
function score(dice) {
  const tripletScores = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200,
  };

  const singleScores = {
    1: 100,
    5: 50,
  };

  const diceCount = {};
  dice.forEach((die) => {
    diceCount[die] = (diceCount[die] || 0) + 1;
  });

  let totalScore = 0;

  for (const dieValue in diceCount) {
    const count = diceCount[dieValue];
    const value = parseInt(dieValue);

    if (count >= 3) {
      totalScore += tripletScores[value];
      const extraDice = count - 3;
      if (extraDice > 0 && singleScores[value]) {
        totalScore += singleScores[value] * extraDice;
      }
    } else if (singleScores[value]) {
      totalScore += singleScores[value] * count;
    }
  }

  return totalScore;
}
