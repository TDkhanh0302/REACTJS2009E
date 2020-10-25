// Bai1 Phep nhan
const calcMultipliers = n => {
    for (let i=1; i<=10; i++) {
        console.log(`${n} x ${i} = ${n*i}`)
    }
}

// Bai2 So chan
const getEvenNumber = n => {
    if (n >= 1 && n <= 30) {
        for (let i=1; i<=(n/2); i++) {
            console.log(2*i)
        }
    }
}

// Bai3 Tinh tong tu 1 den n
const total = n => {
    let result = 0
    if (n>=1 && n<=30) {
        for (let i=1; i<=n; i++) {
            result = result + i
            console.log(result)
        }
    }
}

// Bai4 Tinh giai thua
const calcFactorial = n => {
    let factorial = 1
    if (n>=1 && n<=30) {
        for (let i=1; i<=n; i++) {
            factorial = factorial*i
            console.log(factorial)
        }
    }
}

// Bai5 Dem so chan
const countEvenNumber = (arr = []) => {
    let count = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++
        }
    }
    console.log(count)
}

// Bai6 Loai bo phan tu bi trung lap ra khoi mang
const checkArr = (arr = []) => {
    let newArr = [...new Set(arr)]
    console.log(newArr)
}

// Bai7 Tao ra 1 object cos day du thuoc tinh tu 2 array da cho
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const getListStudent = (studentNames,studentScores) => {
    const listStudent = []
    studentNames.forEach(studentName => {
        studentScores.forEach(studentScore => {
            if (studentName.id === studentScore.id) {
                studentName.score = studentScore.score
                listStudent.push(studentName)
            }
        })
    })
    console.log(listStudent)
}

// Bai8 Tim sinh vien co diem cao nhat va thap nhat
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 10 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 2.3 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 10 }
]
const listStudent = students => {
    let max = 0
    let min = 10
    let result = []

    students.forEach(student => {
        if (student.score > max) {
            max = student.score;
        }
    })

    students.forEach(student => {
        if (student.score < min) {
            min = student.score;
        }
    })

    let rank
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === max) {
            rank = students[i]
            result.push({ studentBest: rank })
        }
        if (students[i].score === min) {
            rank = students[i]
            result.push({ studentBad: rank })
        }
    }
    console.log(result)
}
