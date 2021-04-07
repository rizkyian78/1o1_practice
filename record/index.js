function race(scores) {
  let highestScore = [];
  let lowestScore = [];
  let highest = scores[0];
  let lowest = scores[0];
  for (let i=0; i<scores.length; i++) {
      if (scores[i] > highest) {
          highest = scores[i];
          highestScore.push(highest);
      } else if (scores[i] < lowest) {
          lowest = scores[i];
          lowestScore.push(lowest);
      }
  }
  return [highestScore.length , lowestScore.length]
  }

  const result = (testStudent, testCase) => {
    console.log(testStudent)
    console.log(testCase.join(' ') === testStudent.join(' '))
  }

  result(race([10, 5, 20, 20, 4, 5, 2, 25, 1]), [2, 4])
  result(race([2, 10, 10, 20, 10, 3, 4, 8, 2]), [2, 0])
  result(race([20, 22, 1, 3, 4, 11, 20, 3, 1]), [1, 1])
