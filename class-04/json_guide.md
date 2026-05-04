# 🧠 JSON Guide for React Students

------------------------------------------------------------------------

## 🎯 Big Idea

> JSON is just **data** made of: - 📦 **Arrays** → `[]` - 🧱 **Objects**
> → `{}`

------------------------------------------------------------------------

# 🧩 1. Arrays (`[]`)

### 📌 What is an array?

A list of values.

``` js
const arr = ["a", "b", "c"];
```

🔍 How to access values:

``` js
arr[0] // "a"
arr[1] // "b"
```

💡 Rule:

Arrays use numbers (index)

------------------------------------------------------------------------

# 🧱 2. Objects (`{}`)

### 📌 What is an object?

A collection of key-value pairs.

``` js
const obj = {
  name: "Jason",
  age: 30
};
```

🔍 How to access values:

``` js
obj.name
obj["name"]
```

💡 Rule:

Objects use names (keys)

------------------------------------------------------------------------

# 🔁 3. Combining Arrays + Objects

Most JSON uses BOTH together.

``` js
const data = [
  {
    name: "Billy",
    pets: ["dog", "cat"]
  }
];
```

------------------------------------------------------------------------

# 🧭 4. How to Read JSON (Step-by-Step)

🗣️ Always ask:

-   Is this an array or an object?
-   Do I use:
    -   `[index]` (array)
    -   `.key` (object)

------------------------------------------------------------------------

## 🎯 Example

``` js
var struct = [
  [
    "u"
  ]
];
```

🔍 Breakdown:

-   struct → array\
-   \[0\] → array\
-   \[0\] → "u"

✅ Answer:

``` js
struct[0][0]
```

------------------------------------------------------------------------

# 🧪 More Examples

## Example 1

``` js
const data = [
  {
    name: "Billy",
    pets: ["dog", "cat"]
  }
];
```

❓ Find: "cat"

🧭 Steps:

data → \[0\] → .pets → \[1\]

✅ Answer:

``` js
data[0].pets[1]
```

------------------------------------------------------------------------

## Example 2

``` js
const data = {
  user: {
    profile: {
      name: "Jason"
    }
  }
};
```

❓ Find: "Jason"

🧭 Steps:

data → .user → .profile → .name

✅ Answer:

``` js
data.user.profile.name
```

------------------------------------------------------------------------

# ⚠️ Common Mistakes

❌ Mixing array and object syntax

``` js
data.name   // ❌ if data is an array
data[0]     // ❌ if data is an object
```

❌ Skipping levels

👉 Don't jump ahead --- go step by step

------------------------------------------------------------------------

# 🧠 Mental Model

-   Array → `[0] [1] [2]` (numbers)
-   Object → `.name .age` (keys)

------------------------------------------------------------------------

# 🔁 Practice Strategy

🗣️ Say this as you go:

"Array → index... Object → key... Array → index..."

------------------------------------------------------------------------

# ⚛️ JSON in React

### Example:

``` js
const beasts = [
  {
    title: "Unicorn",
    horns: 1
  }
];
```

🔍 Access data:

``` js
beasts[0].title
```

🔁 Use with `.map()`

``` js
beasts.map(beast => beast.title)
```

🔎 Use with `.filter()`

``` js
beasts.filter(beast => beast.horns === 1)
```

------------------------------------------------------------------------

# 🎯 Quick Practice

### 1.

``` js
["a", ["b", "c"]]
```

👉 Find "c"

✅ `arr[1][1]`

------------------------------------------------------------------------

### 2.

``` js
{ a: { b: ["x", "y"] } }
```

👉 Find "y"

✅ `obj.a.b[1]`

------------------------------------------------------------------------

# ❓ Check Yourself

-   What does `[0]` mean?
-   What does `.name` mean?
-   Am I working with an array or object?

------------------------------------------------------------------------

# 🔑 Final Takeaway

**"Reading JSON is just following a path --- one step at a time."**
