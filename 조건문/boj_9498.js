// 내 풀이
// const fs = require('fs')
// const input = Number(fs.readFileSync('/dev/stdin').toString())
// if (input >= 90 && input <= 100)
//   console.log('A')
// else if (input < 90 && input >= 80)
// console.log('B')
// else if (input < 80 && input >= 70)
// console.log('C')
// else if (input < 70 && input >= 60)
//   console.log('D')
// else
//   console.log('F')

// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString("\n");

data = Number(input[0]);

function check(a) {
  if (90 <= a && a <= 100) console.log("A");
  else if (80 <= a && a <= 89) console.log("B");
  else if (70 <= a && a <= 79) console.log("C");
  else if (60 <= a && a <= 69) console.log("D");
  else console.log("E");
}

check(data);
