// for loops
let array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    console.log(i, "Indexes");
    console.log(array[i], "Values at those index");
}

// while loops

let num = 10;
let counter = 0;
while (counter < num) {
    console.log(counter);
    counter++;
}

// do while loop

let count = 10;
let n = 10;

do {
    console.log(count);
} while(count < n);

// for each loop

let arr = [10, 20, 40, 50];

// arr.forEach(() => {

// });

arr.forEach(function(num, index) {
    console.log(num); // similar to num[i]
    console.log(index); // similar to i
});

// for of loop

let arr2 = [10, 20, 40, 50];
for (let item of arr2) {
    console.log(item);
}