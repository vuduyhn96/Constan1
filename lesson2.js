function increaseValue(inputNumber) {
    if (typeof inputNumber === 'number') {
        return inputNumber + 1;
    } else {
        console.error("Đối số không phải là một số");
    }
}

let inputValue = 5;
let result = increaseValue(inputValue);

document.write("Giá trị đầu vào: " + inputValue + "<br>");
document.write("Giá trị sau khi tăng lên 1: " + result);