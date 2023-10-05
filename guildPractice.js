/*
You ate a cheeseburger for $12.
Jonah had the $20 steak.
Amy's soup cost $8.
Mateo did nt like his mac and cheese for $14.
*/

const dinner = {
    cheeseburger: $12
    steak: $20
    soup: $8
    macAndCheese: $14
};

// Soultion 2.1
let food = []
for (let key in dinner) {
    console.log(food);
}
// let food = ();
//   for (let key in dinner) {
//  food.push.apply(key);
//}

// solution 2.2

let food = Object.keys(dinner);
console.log(food);

//console.log(dinner);

// solution 3.1
let prices = Object.values(dinner);
prices.pop();
console.log(food);

// solution 3.2
// similar to 2.2 solution
let foods = ();
for (let key in dinner) {
    let value = dinner[key]; 
    foods.push(value); // dinner[key]
}
foods.pop();
console.log(foods);

// solution 4.1
// console.log(dinner);
let total = 0;
for (let i =0; i < prices.length; i++) {
    const price = prices[i];
    total += price;
}

// solution 4.2
// prices.forEach

// solution 4.3
//price.reduce

//soulton 4.4
//prices.map

console.log(total)