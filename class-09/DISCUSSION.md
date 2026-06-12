# Readings: Functional Programming

Below you will find some reading material, code samples, and some additional resources that support the topic for this class and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Functional Programming Concepts](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa){:target="_blank"}

  1. What is functional programming?
  Answer:
Functional programming is a style of writing code that focuses on using functions to solve problems.
Instead of constantly changing data, functional programming tries to:

- Use small functions that do one job
- Avoid changing existing data
- Return new values instead of modifying old ones

  2. What is a pure function and how do we know if something is a pure function?
  Answer:
A pure function is a function that:
Always gives the same output when given the same input.
Does not change anything outside of itself.

  **Example:**

```js
function add(a, b) {
  return a + b;
}
add(2, 3); // Always returns 5
```

*This is pure because:*
Same inputs → same output
Nothing outside the function changes

***Not pure:***

```js
let total = 0;

function addToTotal(num) {
  total += num;
}  
```

This changes a variable outside the function.

  3. What are the benefits of a pure function?
  Answer:
Pure functions are easier to:
✅ Read
✅ Test
✅ Debug
✅ Reuse
Because they *always behave the same way*, there are fewer surprises.
Think of a calculator:
`2 + 3`

You always expect the answer to be 5.
Pure functions work the same way.

  4. What is immutability?
  Answer:
Immutability means **"cannot be changed."**

*Instead of changing existing data*, we create new data.

  **Example:**
Instead of:

```js
numbers.push(4);
```

Create a new array:

```js
const newNumbers = [...numbers, 4];
```

  5. What is Referential transparency?
  Answer:
Referential transparency means that *a function call can be replaced with its result and nothing changes*.

  **Example:**

```js
function multiply(a, b) {
  return a * b;
}
multiply(2, 3);
```

Since the answer is always 6, we can replace:

```js
multiply(2, 3) 
```

with: `6` and the program still works the same way.

## Videos

[Node JS Tutorial for Beginners #6 - Modules and require()](https://www.youtube.com/watch?v=xHLd36QoS4k){:target="_blank"}

  1. What is a module?
  Answer:
A module is simply a separate JavaScript file that contains code.
Modules help organize projects into smaller pieces.

  **Example:**

`math.js`
`app.js`
`users.js`

Each file is its own module.

  2. What does the word 'require' do?
  Answer:
`require()` loads another module into your current file.

  **Example:**

```js
const math = require('./math');
```

  3. How do we bring another module into the file the we are working in?
  Answer:
Use `require()`.

  **Example:**

```js
const math = require('./math');
```

***Steps:***

- Find the file.
- Load the file.
- Store it in a variable.
- Use its functions or data.

  **Example:**

```js
const math = require('./math');

math.add(2, 3);
```

  4. What do we have to do to make a module available?
  Answer:
We must export the code we want other files to use.

  **Example:**

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

Then another file can import it:

```js
const add = require('./math');
```

Think of it like sharing notes:

- `module.exports` = making your notes available
- `require()` = borrowing those notes in another file
- Both are needed for modules to work together.
