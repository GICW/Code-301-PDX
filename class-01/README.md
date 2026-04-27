# React and Component-Based Architecture

## Overview

In this class we will be covering some new topics and reviewing concepts you should already be familiar with.

We will spend some time reviewing the concepts from the prework. We will also discuss several new topics: Vite and component-based architecture.

## Class 01 Outline


- Review of prework
- Warm up
- Reading 01
- Demo
  - for vs forEach
  - React Components
- Discussion of component-based architecture
- Introduction of code challenge topic
  - Code Challenge
    - Array methods
      - `for` + `forEach`
- Lab prep

## Learning Objectives

### Students will be able to

#### Describe and Define

- Component-based architecture
- React
- Vite
- Gain an understanding of scope with arrow functions
- Gain an understanding of context, scope, "this", and the "new" keyword
- Gain an understanding of the core concepts of React and how to create a basic React application
- Understand component-based architecture and be able to build a simple component-based React application

#### Execute

- Be able to create a basic React application using Vite.

## Notes

1. What is React?
2. What are components?
3. What is the difference between an arrow function and a function declaration?
4. Turning a function declaration into an arrow function:

   ```javascript
   function doSomething(name) {
     // Do something
   }

   doSomething = (name) => {
     // Do something
   }

   // Or make it a one liner!
   doSomething = (name) => // Do something small
   ```

1. Difference between a constructor function and a class:

   ```javascript
   // constructor
   function Cat(name) {
     this.name = name;
     this.fluffy = true;
   }

   Cat.prototype.speak = function(){
     console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('Bob');
   bob.speak();

   // class
   class Cat {
     constructor(name) {
       this.name = name;
       this.fluffy = true;
     }

     speak = () => console.log(`${this.name} says meow`);
   }

   // to make a new instance
   const bob = new Cat('bob');
   bob.speak();
   ```

2. Basic React Component Structure:

   ```javascript
   import React from 'react';

   class Something extends React.Component {
     render() {
       return(
          <section>
            <h1>Header for Something</h1>
            <p>Text that is all about Something.<p>
          </section>
       )
     }
   }

   export default Something
   ```
