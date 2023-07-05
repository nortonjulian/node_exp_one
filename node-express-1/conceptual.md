### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  The two ways of managing async code is with then/catch and async/await.

- What is a Promise?
  A placeholder for a future value

- What are the differences between an async function and a regular function?
  Async functions always return a promise. Async is multi-thread which means operations acan run in parallel whereas Sync functions can only run one
  operation at a time.

- What is the difference between Node.js and Express.js?
  Node is the JavaScript run-time environment whereas Express is the froamwork that sits on top of Node to handle requests and responses.

- What is the error-first callback pattern?
  Consists of executing a function whenthe async operation ends(such as an incoming AJAX response) which takes as first argument an error,
  if ine occurred, and the result of therequest as extra arguments.

- What is middleware?
  Is code that runs in the middle of the request/response cycle

- What does the `next` function do?
  This sends a signal to move to the error handler

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  1. Instead of using "await" for the API calls, it would be more efficient to use Promise.all
  2. The usernames are hardcoded. It would have been better to use a string literal to allow it to accept any username

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
