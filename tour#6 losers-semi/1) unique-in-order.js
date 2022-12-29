// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder = (str) => {
    str = Array.isArray(str) ? str : str.split('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) { str.splice(i + 1, 1); i-- }
    }

    return str;
}

console.log(uniqueInOrder(['a', 'b', 'a', 'A', 'z', 'z', 'c']))
console.log(uniqueInOrder('ABBCcADA'))
console.log(uniqueInOrder('AAAABBBCCDAAB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3, 1]))
console.log(uniqueInOrder([0, 0, 0, 0, 0, -1, 0,]))