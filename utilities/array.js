const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(it => it * 2);
console.log(doubledNumbers);

const serializedPotatoes = numbers.map(n => {
    return "potato" + n;
});
console.log(serializedPotatoes);