function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert("Giá trị của result trước khi gọi hàm: " + result);
result = addNumbers();
alert("Giá trị của result sau khi gọi hàm: " + result);