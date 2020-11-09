box = document.getElementById("box")

const changeBoxColor = event => {
  const color = box.style.background
  const nextColor = color === 'red' || !color ? 'grren' : 'red'
  event.target.style.background = nextColor
}
