function compareAndSum(param1, param2) {
    if (param1 > param2) {
        alert("Tham số thứ nhất lớn hơn tham số thứ hai");
    } else {
        return param1 + param2;
    }
}
let result = compareAndSum(8, 5);
document.write("Kết quả: " + result);
