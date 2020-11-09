const changeOption = () => {
  const option = document.getElementById("listOption").value
  const laptop = document.getElementById("showListLaptop")
  const phone = document.getElementById("showListPhone")
  const tivi = document.getElementById("showListTV")

  if (option == "laptop") {
    laptop.removeAttribute("class")
    phone.setAttribute("class", "hidden")
    tivi.setAttribute("class", "hidden")
  } else if (option == "phone") {
    phone.removeAttribute("class")
    laptop.setAttribute("class", "hidden")
    tivi.setAttribute("class", "hidden")
  } else {
    tivi.removeAttribute("class")
    laptop.setAttribute("class", "hidden")
    phone.setAttribute("class", "hidden")
  }
}
