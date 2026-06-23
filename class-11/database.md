# SQL, NoSQL, MongoDB, Mongoose, Schemas, and CRUD

---

# Big Picture

When building applications, we need a place to store information permanently.

Examples:

- User accounts
- Products
- Blog posts
- Weather data
- Social media posts

This permanent storage is called a **database**.

---

# SQL vs NoSQL

## SQL Databases

Examples:

- MySQL
- PostgreSQL
- Microsoft SQL Server

SQL databases store information in **tables**.

Example:

| id | name | email |
|----|------|------|
| 1 | Jason | jason@email.com |
| 2 | Bob | bob@email.com |

### Common Uses

- Banking systems
- Online stores
- User account systems
- Inventory management

### Pros

✅ Organized structure

✅ Excellent for relationships

✅ Strong data consistency

### Cons

❌ Less flexible

❌ Changes can require migrations

---

## NoSQL Databases

Examples:

- MongoDB
- CouchDB
- Firebase Firestore

NoSQL databases often store information as documents.

Example:

```js
{
  name: "Jason",
  email: "jason@email.com",
  favoriteColor: "blue"
}
```

### Common Uses

- Social media platforms
- Chat applications
- Real-time applications
- Content management systems

### Pros

✅ Flexible structure

✅ Easy to scale

✅ Works naturally with JavaScript objects

### Cons

❌ Less strict organization

❌ Relationships can be more difficult

---

# Why Developers Use Mongoose

Different databases often have different commands.

Without a tool like Mongoose:

```js
database.insert()
database.add()
database.createRecord()
```

Every database might work differently.

Developers prefer a common API:

```js
.save()
.find()
.findOne()
.deleteOne()
```

This makes code easier to learn and maintain.

---

# What is Mongoose?

Mongoose is an ODM (Object Document Mapper).

Think of Mongoose as a translator between:

```text
Your JavaScript Code
        ↓
     Mongoose
        ↓
      MongoDB
```

Mongoose helps us:

- Define data structure
- Create records
- Read records
- Update records
- Delete records
- Add custom business logic

---

# CRUD Operations

CRUD is the foundation of database work.

| Letter | Meaning |
|----------|----------|
| C | Create |
| R | Read |
| U | Update |
| D | Delete |

Examples:

```js
.save()
.find()
.updateOne()
.deleteOne()
```

---

# STEP 1: Connect to MongoDB

## File Location

Usually found in:

```text
server.js
```

or

```text
index.js
```

because we connect to the database when the server starts.

## Code

```js
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/cats-database'
);

console.log('Connected to MongoDB');
```

## Simple Explanation

This code says:

> "Connect my application to the MongoDB database called cats-database."

Think of it like opening a phone line between your server and your database.

---

# STEP 2: Create a Schema

## File Location

1. When Do I Need to Create a Schema?
Think of a Schema as a blank form or a blueprint. You need to create a schema before you allow your backend server to save anything new to your database.

Whenever your application introduces a new "thing" that needs to be remembered—like a new user, a new blog post, a shopping cart item, or a high score—you must build a schema for it first. It gives the database a heads-up on exactly what format to expect.

2. How Do I Know What Needs to Be Added?
To figure out what goes inside your schema, don't stare at a blank code editor. Look at your app's user interface (UI) or think about your app's features and ask yourself: "What specific information am I collecting that I need to save?"

- If you are building a social media platform, your post schema needs: the text content, a timestamp, and the name of the person who posted it.
- If you are building a video game dashboard, your player schema needs: a username, their current level, and a total score.
- If the backend doesn't need to track it or save it permanently, it doesn't belong in the schema!

3. How Do I Create a Schema? (The Required Structure)
A schema is written as a standard JavaScript object containing **key-value pairs**.

The *Key* is the name of the data field *(e.g., username)*.

The *Value* tells the database what type of data is allowed there *(e.g., String, Number, Boolean)*.

For a schema to actually do its job, it cannot stay just a blueprint. **It must be compiled into a Model**.

**Jargon Alert** - Model: A Model is just a special JavaScript class generated from your schema blueprint. It gives you the actual power to run commands like `.save()` or `.find()` on your database.
Usually inside:

```text
models/Cat.js
```

Schemas are commonly stored in a *models folder*.

Example project structure:

```text
project-folder
│
├── server.js
│
├── models
│   └── Cat.js
│
└── routes
    └── cats.js
```

## Code

```js
const catSchema = new mongoose.Schema({
  name: String
});
```

## Simple Explanation

A schema is a blueprint.

Think about building a house.

A blueprint describes:

- bedrooms
- bathrooms
- kitchen

A schema describes:

- name
- age
- breed

Example cat document:

```js
{
  name: "Fluffy"
}
```

The schema tells MongoDB what fields we expect.

---

# STEP 3: Create a Model

## File Location

Usually in the same model file.

Example:

```text
models/Cat.js
```

## Code

```js
const CatModel = mongoose.model(
  'cat-collection',
  catSchema
);
```

## Simple Explanation

The model is the tool we use to talk to the database.

Think:

```text
Schema = Blueprint

Model = Worker using the blueprint
```

Without a model, we cannot perform CRUD operations.

---

# Typical Export

Inside:

```text
models/Cat.js
```

you will usually see:

```js
module.exports = CatModel;
```

Then another file can use it:

```js
const CatModel = require('./models/Cat');
```

---

# STEP 4: Create and Save a Record

## File Location

Often found in:

```text
server.js
```

or

```text
routes/cats.js
```

because saving data usually happens when a request arrives.

## Code

```js
const fluffy = new CatModel({
  name: 'fluffy'
});

fluffy.save(function(error, savedCat) {

  if (error) {
    console.log(error);
    return;
  }

  console.log(savedCat);

});
```

## Simple Explanation

This code:

1. Creates a new cat object.
2. Saves it to MongoDB.
3. Prints the saved cat.

Think:

```text
Create Cat
      ↓
Save Cat
      ↓
Store in Database
```

This is the **Create** part of CRUD.

---

# STEP 5: Read Records

---

## Find All Cats

### Code

```js
CatModel.find({}, function(error, cats) {

  if (error) {
    console.log(error);
    return;
  }

  console.log(cats);

});
```

## Explanation

The empty object:

```js
{}
```

means:

> "Find everything."

Result:

```js
[
  { name: 'fluffy' },
  { name: 'oreo' },
  { name: 'mittens' }
]
```

MongoDB returns an array.

Because it is an array, we can loop through it:

```js
cats.forEach(cat => {
  console.log(cat.name);
});
```

---

## Find Specific Cats

### Code

```js
CatModel.find(
  { name: 'fluffy' },
  function(error, cats) {

    if (error) {
      console.log(error);
      return;
    }

    console.log(cats);

  }
);
```

## Simple Explanation

This query says:

> "Find every cat whose name is fluffy."

The search object is called a **query**:

```js
{ name: 'fluffy' }
```

*Result:*

```js
[
  {
    name: 'fluffy'
  }
]
```

This is the **Read** part of CRUD.

---

# Where These Pieces Usually Live

Typical Express + MongoDB Project

```text
project-folder
│
├── server.js
│
├── models
│   └── Cat.js
│
├── routes
│   └── cats.js
│
└── package.json
```

---
## How Do I Connect It to Mongoose & MongoDB?

Connecting your schema takes a clean 3-step organization pipeline:

- You write your schema rules in its own separate file inside a dedicated folder (conventionally named **models/**).
- At the bottom of that file, you compile that schema into a Model and *export it* using **module.exports**.
- You import *(require)* that model into your main backend file *(server.js)* so your server routes can start saving and reading data.

## server.js

Responsibilities:

- Start Express
- Connect to MongoDB
- Load routes

Example:

```js
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/cats-database'
);

const app = express();

app.listen(3001);
```

---

## models/Cat.js

Responsibilities:

- Create Schema
- Create Model
- Export Model

Example:

```js
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String
});

const CatModel = mongoose.model(
  'cat-collection',
  catSchema
);

module.exports = CatModel;
```

---

## routes/cats.js

Responsibilities:

- Create cats
- Read cats
- Update cats
- Delete cats

Example:

```js
const CatModel = require('../models/Cat');

CatModel.find({}, function(error, cats) {
  console.log(cats);
});
```

---

# Final Summary

Remember this flow:

```text
Connect to MongoDB
        ↓
Create Schema
        ↓
Create Model
        ↓
Create Records (.save)
        ↓
Read Records (.find)
        ↓
Update Records
        ↓
Delete Records
```

The most important concepts for beginners are:

```text
Schema
    ↓
Model
    ↓
CRUD
```

If you understand:

```js
new mongoose.Schema()

mongoose.model()

.save()

.find()
```

you already understand the foundation of how MongoDB and Mongoose work together in most Node.js applications.

### Note:
When running a app with a database, there should be 3 TABS open:

- **Tab 1:** MongoDB (mongod) – This tab keeps the database engine running. It acts like the engine of a car. If it closes, your backend can't save anything.

- **Tab 2:** Backend Server (server.js / Node) – This tab runs your API routes and listens for incoming requests. It constantly prints out logs (like your console.log('Mongoose connected') messages).

- **Tab 3:** Frontend (React) – This tab runs your React development server (usually via npm run dev or npm start). It keeps track of your browser connection and alerts you to frontend layout or JavaScript syntax errors.

Keeping them in separate tabs makes it incredibly easy to see exactly where your code is breaking when an error pops up.