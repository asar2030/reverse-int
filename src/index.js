module.exports = function reverse (n) {
    let string = n.toString()
    if (n < 0) {
        string = string.slice(1)
    }
    return +string.split('').reverse().join('')
}
