const a = [1, 2, 3, 4]
const b = [...a, 5, 6]
// console.log(b)

function f(...args) {
    // console.log(args)
    return args.sort()
}
// const c = [[2, 1], [2, 1], [1, 2]]
// f(c)
// console.log(f(1, 4, 6, 2, 1))

const filter = (...args) => {
    return args.filter(el => el > 0);
}
console.log(filter(-2, -2, 9, 8))
