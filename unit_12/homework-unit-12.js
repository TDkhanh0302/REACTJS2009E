// Exercise 1:
const compareArray = (arr1, arr2) => {
  return arr1.every((value, index) => value === arr2[index])
}

const isEqual = (array1, array2) => {
  if (array1.length == array2.length && compareArray(array1,array2)) {
    return true
  } else {
    return false
  }
}

// Exercise 2:
const arr = []
const flattenArray = (data = []) => {
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i]) && data[i].length > 0) {
      flattenArray(data[i])
    } else {
      arr.push(data[i])
    }
  }
  return arr
}

// Exercise 3:
const chunksArray = (data, chunk) => {
  newArr = []
  for (let i = 0; i < data.length; i++) {
    newArr.push(data.splice(0, chunk))
  }
  return newArr
}

// Exercise 4:
const checkIntersection = (arr1, arr2) => {
  const intersection = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i])
    }
  }
  return intersection
}

// Exercise 5:
const checkDate = (date) => {
  const milestoneTime  = Date.parse('October 30, 2020 12:30:32')
  return Date.parse(date) <= Date.parse(milestoneTime )
}

// Exercise 6:
const checkEmail = email => {
  const regexEmail  = /^([A-Za-z0-9]{1})([\._-]?[a-z0-9]+)*@([a-z]{5,7})(\.[a-z]{2,3})+$/
  return regexEmail.test(email)
}

const checkUerName = strUserName => {
  const regexUserName  = /^[a-z_][^__0-9]([\._-]?[A-Za-z0-9]+){1,8}$/
  return regexUserName.test(strUserName)
}
