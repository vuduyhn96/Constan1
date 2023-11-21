function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let number = parseInt(prompt("Nhập số cần kiểm tra "));
if (isPrime(number)) {
    alert(number + " là số nguyên tố");
} else {
    alert(number + " không là số nguyên tố");
}