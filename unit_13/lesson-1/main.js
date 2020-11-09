const sum = document.getElementById("sum")
const total = document.getElementById("total")

const getSum = () => {
  const numOne = document.getElementById("num-1").value
  const numTwo = document.getElementById("num-2").value
  const result = Number(numOne) + Number(numTwo)
  return total.innerHTML = `<b>Tổng hai số là: ${result}</b>`
}

sum.addEventListener("click", getSum)
