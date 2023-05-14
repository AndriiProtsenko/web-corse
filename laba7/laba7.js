//1.
function Task1(value) {
    if (typeof value !== 'number') return "";
    return value % 2 === 0 ? "Число парне" : "Число не парне";
    }

    console.log("T1.1: Передача string: " + Task1("ab"));
    console.log("T1.2: Передача boolean: " + Task1(true));
    console.log("T1.3: Передача number = 3: " + Task1(3));
    console.log("T1.4: Передача number = 2: " + Task1(2));

    //2.
    function Task2() {
    let number = 1;
    let simpleNumbers = [];
    
    for (let i = 0; i < 5;) {
        if (ValueIsSimple(number)) {
            simpleNumbers.push(number);
            i++;
        }
        number++;
    }
    return SumOfArrayNumbers(simpleNumbers);
    }
    
    function ValueIsSimple(value) {
    if (value <= 1) return false;
    

    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
    }
    
    function SumOfArrayNumbers(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
    }

console.log("T2: Сума перших п'яти простих чисел: " + Task2());
    //3.
    function Task3(n) {
    let array = [];
    let row = "1";
    

    for (let i = 0; i < n; i++) {
        array[i] = Number(row);
        row += "1";
    }
    return SumOfArrayNumbers(array);
    }

console.log("T3.1: n = 3: " + Task3(3));
console.log("T3.2: n = 4: " + Task3(4));
console.log("T3.3: n = 6: " + Task3(6));