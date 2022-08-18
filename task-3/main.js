const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let input = result.input
    let numbers = input.split(',')
    let a = parseInt(numbers[0])
    let b = parseInt(numbers[1])
    let c = parseInt(numbers[2])
    if (a + b > c && a + c > b && b + c > a) {
        console.log("YES");
    } else {
        console.log("NO");
    }
    });
