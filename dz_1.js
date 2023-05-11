//*/////////////////// First task ////////////////////*//

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//*/////////////////// Second task ////////////////////*//


var array = ['milk', 'beer', 'beer', 'milk', 'milk'];
var milk = ['milk']
for (var i = 0; i < array.length; i++) {
    if (milk.includes(array[i])) {
        console.log('good');
    } else {
        console.warn('bad');
    }
}
