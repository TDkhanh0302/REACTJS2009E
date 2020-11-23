function editRow(id) {
  document.getElementById("edit_button" + id).style.display = "none"
  document.getElementById("save_button" + id).style.display = "inline-block"
  document.getElementById("cancel_button" + id).style.display = "inline-block"

  const name = document.getElementById("name_row" + id)
  const gender = document.getElementById("gender_row" + id)
  const age = document.getElementById("age_row" + id)

  const nameData = name.innerHTML
  const genderData = gender.innerHTML
  const ageData = age.innerHTML

  name.innerHTML = "<input type='text' id='name_text" + id + "' value='" + nameData + "'>";
  gender.innerHTML = "<input type='text' id='gender_text" + id + "' value='" + genderData + "'>";
  age.innerHTML = "<input type='text' id='age_text" + id + "' value='" + ageData + "'>";
}

function saveRow(id) {
  const nameVal = document.getElementById("name_text" + id).value
  const genderVal = document.getElementById("gender_text" + id).value
  const ageVal = document.getElementById("age_text" + id).value

  document.getElementById("name_row" + id).innerHTML = nameVal
  document.getElementById("gender_row" + id).innerHTML = genderVal
  document.getElementById("age_row" + id).innerHTML = ageVal

  document.getElementById("edit_button" + id).style.display = "inline-block"
  document.getElementById("save_button" + id).style.display = "none"
  document.getElementById("cancel_button" + id).style.display = "none"
}

function deleteRow(id) {
  document.getElementById("row" + id + "").outerHTML = ""
}

function createRow() {
  document.getElementById("new_row").style.display = "block"
}

function addRow() {
  var new_name = document.getElementById("new_name").value
  var new_gender = document.getElementById("new_gender").value
  var new_age = document.getElementById("new_age").value

  const table = document.getElementById("my-table")
  let id = (table.rows.length) - 1
  table.insertRow(id).outerHTML = ("<tr id='row" + id + "'>" +
    "<td><input type='checkbox' class='check-box'></td>" +
    "<td id='id_row" + id + "'>" + id + "</td>" +
    "<td id='name_row" + id + "'>" + new_name + "</td>" +
    "<td id='gender_row" + id + "'>" + new_gender + "</td>" +
    "<td id='age_row" + id + "'>" + new_age + "</td>" +
    "<td>" +
    "<button type='button' id='edit_button" + id + "' class='btn btn-primary btn-sm' onclick='editRow(" + id + ")'>Edit</button>" +
    "<button type='button' id='save_button" + id + "' class='btn-save btn btn-success btn-sm' onclick='saveRow(" + id + ")'>Save</button>" +
    "<button type='button' id='cancel_button" + id + "' class='btn-cancel btn btn-warning btn-sm'>Cancel</button>" +
    "<button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" + id + ")'>Delete</button>" +
    "</td>" +
    "</tr>")

  document.getElementById("new_name").value = ""
  document.getElementById("new_gender").value = ""
  document.getElementById("new_age").value = ""

  document.getElementById("new_row").style.display = "none"
}
