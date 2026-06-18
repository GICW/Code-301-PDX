# Persistence

## Overview

During this class we will talk about in-memory storage as well as dive deeper into modularization and refactorization.

## Class 9 Outline

- Warm-up exercise
- Reading 10
- Demo
  - cache API requests
  - 2D Arrays
- Introduction of the code challenge topic
  - nested for loops
- Disucss Labs 7, 8, & 9
- Lab 10 Preview
  - caching API requests
  - Modularize

## Learning Objectives

### Students will be able to

#### Describe and Define

- In Memory Database
- Cache
- Cache Hit
- Cache Miss

#### Execute

- Persist data in memory
- Understand the advantages and drawbacks to persisting data in memory vs using something like a database

## Notes

1. What is a cache?

1. What does a cache hit mean? What does a cache miss mean?

1. What does the word `debugger` do in your code?

1. What is a breakpoint?

1. List 5 different debugging tools:

1. Adding to the cache:

  ```javaScript
    if(inMemoryDB[ingredient] !== undefined){
      // if the info is in the inMemoryDB, just use that data
      return inMemoryDB[ingredient];
    } else {
      // go the API and get the information
      // Add it to the inMemoryDB
      inMemoryDB[ingredient] = recipeArr;
    }
  ```

1. How to keep track of how old the data is: add a key with the time stamp in the constructor

  ```javaScript
  function Recipe(obj){
    // other keys
    this.dateAdded = Date.now();
  }
  ```

- compare that date/time with however long you want to keep the data. If the data is too old, just empty the object

  ```javaScript
  if (cache[key] && (Date.now() - cache[key].dateAdded < 50000)) {
    console.log('Cache hit');
  } else {
    // dump the data and get fresh data from the API
  }
  ```
