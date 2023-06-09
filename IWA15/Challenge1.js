// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// 3 arrays holding the arrays of numbers from the lists object
const first = data.lists [0] [1]
const second = data.lists [1] [1]
const third = data.lists [2] [1]

// declares a result arrays
const result = []

//gets biggest number from end of each array
const extractBiggest = () => {
    //3 if statements (check for biggest number in each array)

let firstnum = first[first.length - 1]
    let biggest = 0
    
    if (firstnum > second) {
        biggest = firstnum
    }

    else if (second > third) {
        biggest = second
    }

    else (biggest = third)

}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)