// Bai1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
// Way 1:
const loopArray = (char, num) => {
  const newArr = []
  for (let i = 0; i < num; i++) {
    newArr.push(char)
  }
  return newArr
}
// Way 2:
const loopArray = (char, num) => {
  const newArr = []
  let i = 0
  while (i < num) {
    newArr.push(char)
    i++
  }
  return newArr
}

// Bai2: Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm
const reverseArray = (arr = []) => {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

// Bai3: Xóa đi các giá trị được xem là sai
const deleteFalseElement = arr => arr.filter(element => element)

// Bai4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
const createObject = (data = []) => {
  const newObject = {}
  data.forEach(obj => {
    newObject[obj[0]] = obj[1]
  })
  return newObject
}

// Bai5: Sắp xếp mảng tăng dần
const sortArray = (arraysAscending = []) => arraysAscending.sort(function(a, b){return a - b})

// Bai6: Kiểm tra input đầu vào có phải là object hay không?
const checkInput = obj => {
  if (typeof obj === 'object') {
    return true
  }
  if (Array.isArray(obj) === 'true' ) {
    return false
  }
}

// Bai7: Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào
const convertObject = (obj = {}, input = []) => {
  for (let key in obj) {
    input.forEach(keyInput => {
      if (key === keyInput) {
        delete (obj[key])
      }
    })
  }
  return obj
}

// Bai8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
const deleteElement = (arr = []) => {
  if (arr.length > 5) {
    arr.splice(1, 2)
  }
  return arr
}

// Bai9:
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const checkCondition = students => {
  const newArr = []
  students.map(student => {
    if (student.score > 5 && student.name.indexOf('Duy') === -1) {
      newArr.push('Pass')
    } else {
      newArr.push('Fail')
    }
  })
  return newArr
}

/* Bai10:
Cho array có cấu trúc như input bài 9
Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5 */
// Chưa tìm được hướng giải quyết. Em xin phép bổ sung sau vì giờ em còn phải ôn thi nữa :'(
