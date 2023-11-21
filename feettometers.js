function convertLength(value, conversionFactor) {
    return value * conversionFactor;
}
    let foot = prompt("Nhập foot: ");
    let meter = convertLength(foot, 0.305);
    document.write(`${foot} foot = ${meter} meter <br>`);

    let meterInput = prompt("Nhập meter: ");
    let footResult = convertLength(meterInput, 3.279);
    document.write(`${meterInput} meter = ${footResult} foot`);


