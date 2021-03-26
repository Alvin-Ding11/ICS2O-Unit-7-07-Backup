document.getElementById('buttonm').addEventListener('click', calc)
document.getElementById('reset').addEventListener('click', reload)
let int1 = 0
let int2 = 0
let count = 0
let ans = 0

function calc () {
  int1 = document.getElementById('in1').value
  int1 = parseInt(int1)
  int2 = document.getElementById('in2').value
  int2 = parseInt(int2)

  for (count = 0; count < int1; count++) {
    ans = ans + int2
  }

  if (int1 < 0 || int2 < 0) {
    document.getElementById('answer').innerHTML = '-' + ans
  } else if (int1 < 0 && int2 < 0) {
    document.getElementById('answer').innerHTML = ans
  } else {
    document.getElementById('answer').innerHTML = ans
  }

function reload () {
  location.reload()
}
