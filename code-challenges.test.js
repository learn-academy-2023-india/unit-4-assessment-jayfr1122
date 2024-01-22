// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.
function genFib(length) {
    if (typeof length !== 'number' || length <= 2) {
      throw new Error('Input must be a number greater than 2')
    }
  
    const fibArray = [0, 1]
  
    for (let i = 2; i < length; i++) {
      const nextFib = fibArray[i - 1] + fibArray[i - 2]
      fibArray.push(nextFib)
    }
  
    return fibArray
}

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe('genFib', () => {
  it('should generate Fibonacci sequence with length 6', () => {
    const fibLength1 = 6
    const result1 = genFib(fibLength1)

    expect(result1).toEqual([0, 1, 1, 2, 3, 5])
  })

  it('should generate Fibonacci sequence with length 10', () => {
    const fibLength2 = 10;
    const result2 = genFib(fibLength2);

    expect(result2).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code: I had to look up how to code a Fibonacci sequence.
// genFib function
// input length of numbers
// - If typeof length is not 'number' or length is less than or equal    to 2, throw an error "Input must be a number greater than 2".
// - Initialize fibArray as an array containing the first two elements of the Fibonacci sequence: [0, 1].
// - Loop from i = 2 to length - 1:
//              a. Calculate the next Fibonacci number (nextFib) as the   sum of the last two elements of fibArray.
//              b. Push nextFib to the fibArray.
// - Return fibArray.

// genFib function
// Test Case 1:
// - Describe: It should generate Fibonacci sequence with length 6
// - Set fibLength1 to 6
// - Call genFib with fibLength1 and store the result in result1
// - Expect result1 to be equal to [0, 1, 1, 2, 3, 5]

// Test Case 2:
// - Describe: It should generate Fibonacci sequence with length 10
// - Set fibLength2 to 10
// - Call genFib with fibLength2 and store the result in result2
// - Expect result2 to be equal to [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.


// a) Create a test with expect statements for each of the variables provided.


describe('calcVotes', () => {
    it('should calculate votes for votes1', () => {
      const votes1 = { upVotes: 13, downVotes: 2 }
      const result1 = calcVotes(votes1)
  
      expect(result1).toEqual(11)
    })
  
    it('should calculate votes for votes2', () => {
      const votes2 = { upVotes: 2, downVotes: 33 }
      const result2 = calcVotes(votes2)
  
      expect(result2).toEqual(-31)
    })
  
    it('should throw an error for invalid input', () => {
      const invalidInput = 'invalid'
      
      expect(() => calcVotes(invalidInput)).toThrowError('Input must be an object with upVotes and downVotes properties.')
    })
})

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
function calcVotes(votes) {
    if (typeof votes !== 'object' || !votes.hasOwnProperty('upVotes') || !votes.hasOwnProperty('downVotes')) {
      throw new Error('Input must be an object with upVotes and downVotes properties.')
    }
  
    return votes.upVotes - votes.downVotes
}

// Pseudo code: 
// Function: calcVotes
// Input: votes (an object with properties upVotes and downVotes)

// - Validate that votes is an object with properties upVotes and downVotes.
//    - If not, throw an error "Input must be an object with upVotes and downVotes properties."

// - Calculate the votes:
//    - Subtract downVotes from upVotes.

// - Return the calculated votes.
