# Class 5: Putting it all together

## Overview

For this class we will use the skills we learned during the last module to build a new application: city explorer! Your lab will be to take React starter code and turn it into a beautiful portfolio.

## Class 5 Outline

- Warm-up exercise
- Reading 5
  - Discussion
- Review code challenges *(if needed)*
  - `map()`
  - `forEach`
  - `filter`
  - spread operator `...`
- Introduction of the code challenge topic
  - Object Interation
- Demo
  - City Explorer
  - Object Interation
  - Portfolio Deployment
- Lab Preview & Prep
  - Portfolio Deployment
- Classwork
  - Code Challenge #5
  - Lab 5
    - Portfolio styling
    - Add content
    - Deploy to Netlify

## Learning Objectives

### Students will be able to

#### Describe and Define

- Conditional Rendering
- Ternary Statements
- Browser Router

#### Execute

- Be able to build a React app that passes props from parent component to child component
- Hold state in the application
- Use forms in React
- Conditionally render data

## Notes

1. What is conditional rendering?

1. What is Browser Router?

1. A ternary statement:

  ```javaScript
  // regular if/else conditional
  if(conditionIsTrue){
    return 'it is true'
  } else {
    return 'it is false'
  }

  // ternary statement
  return conditionIsTrue ? 'it is true' : 'it is false';
  ```

1. Conditionally render a component:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        // use a ternary to conditionally render the Child component
        {this.state.displayChild ?
          <Child>
        : ''
        }
      )
    }
  }
  ```

- A better way to write it would be:

  ```javaScript
  class Parent extends React.Component {
    constructor(props){
      super(props);
      this.state={
        displayChild: false
      }
    }

    render() {
      return(
        {this.state.displayChild &&
          <Child>
        }
      )
    }
  }
  ```
