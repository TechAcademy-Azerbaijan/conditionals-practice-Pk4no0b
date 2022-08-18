const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let x = parseInt(result.input);
    let num;
    if (-10000 <= x && x <= 10000) {
        if (x >= 10) {
            num = x ** 3 + x * 5;
        } else {
            num = x ** 2 - 2 * x + 4;
        }
    }
    console.log(num);
});
