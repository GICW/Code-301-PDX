# Readings: Functional Programming

Below you will find some reading material, code samples, and some additional resources that support the topic for this class and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

[Functional Programming Concepts](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa){:target="_blank"}

  1. What is functional programming?
  1. What is a pure function and how do we know if something is a pure function?
  Example:

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

  1. What are the benefits of a pure function?
  1. What is immutability?
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

  1. What is Referential transparency?
  Example:

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
  1. What does the word 'require' do?
  Example:

```js
const math = require('./math');
```

  1. How do we bring another module into the file the we are working in?
  Example:

```js
const math = require('./math');
```

**Steps:**

- Find the file.
- Load the file.
- Store it in a variable.
- Use its functions or data.
*Example:*

```js
const math = require('./math');

math.add(2, 3);
```

  1. What do we have to do to make a module available?
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
