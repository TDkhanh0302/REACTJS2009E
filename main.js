// Bai1 Tinh thue va luong rong
function getSalary(Salary){
    Salary == Number
    if (Salary >= 15000000) {
        console.log("Thue thu nhap:", Salary*30/100)
        console.log("Luong rong:", Salary*70/100)
    }
    else if (Salary >= 7000000 && Salary < 15000000) {
        console.log("Thue thu nhap:", Salary*20/100)
        console.log("Luong rong:", Salary*80/100)
    }
    else if (Salary > 0 && Salary < 7000000) {
        console.log("Thue thu nhap:", Salary*10/100)
        console.log("Luong rong:", Salary*90/100)
    }
}
// Bai2 Xet tuoi vao lop 10
function getAge(age) {
    age == Number
    if (age < 16) {
        console.log("Hoc sinh khong du tuoi vao lop 10")
    }
    else {
        console.log("Hoc sinh du tuoi vao lop 10")
    }
}
// Bai3 So sanh voi so 100
function compareNumber(num) {
    num == Number
    if (num < 100) {
        console.log("So nho hon 100")
    }
    else if (num > 100) {
        console.log("So lon hon 100")
    }
}
// Bai4 Tim so lon nhat
function numMax(a, b, c) {
    a, b, c == Number
    var max = a
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
    console.log(max)
}
// Bai5 Xep hang hoc luc
function mediumScore(score) {
    score == Number
    if (score >= 9) {
        console.log("Hang A")
    }
    else if (score >= 7 && score < 9) {
        console.log("Hang B")
    }
    else if (score >= 5 && score < 7) {
        console.log("Hang C")
    }
    else {
        console.log("Hang F")
    }
}
// Bai6 Giai phuong trinh bac hai
function equation(a, b, c) {
    a, b ,c == Number
    if (a === 0 && b === 0) {
        console.log("Phuong trinh vo nghiem")
    }
    else if (a === 0 && b != 0) {
        console.log("Phuong trinh co 1 nghiem la:", -c/b)
    }
    else if ((b*b - 4*a*c) < 0) {
        console.log("Phuong trinh vo nghiem")
    }
    else {
        console.log("Phuong trinh co 2 nghiem la:", (-b+Math.sqrt(delta))/(2*a),'va ', (-b-Math.sqrt(delta))/(2*a))
    }
}
// Bai7 Tinh hoa hong
function getCommission(money) {
    money == Number
    if (money <= 100) {
        console.log("Phi hoa hong la:", money*5/100, "trieu")
    }
    else if (money <= 300 && money >100) {
        console.log("Phi hoa hong la:", money*10/100, "trieu")
    }
    else {
        console.log("Phi hoa hong la:", money*20/100, "trieu")
    }
}
// Bai8 Tinh cuoc dien thoai
function telephoneCharges(minute) {
    minute == Number
    if (minute <= 50) {
        console.log("Cuoc dien thoai la:", 25000 + minute*600, "VND")
    }
    else if (minute > 50 && minute < 200) {
        console.log("Cuoc dien thoai la:", 25000 + 50*600 + (minute-50)*400, "VND")
    }
    else {
        console.log("Cuoc dien thoai la:", 25000 + 50*600 + 150*400 + (minute-200)*200, "VND")
    }
}