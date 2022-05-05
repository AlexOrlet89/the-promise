//https://api.magicthegathering.io/v1/cards

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetCards() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const results = await res.json();

  console.log('asyncGetCards', results);
  return results;
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function fetchThenCards() {
  const res = fetch('https://futuramaapi.herokuapp.com/api/quotes/1').then(
    (res) => res.json().then((result) => console.log('fetchThenCards', result))
  );

  // console.log('fetchThenCards', res)
}
/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function fetchAsyncTryCards() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const results = await res.json();
    console.log('fetchAsyncTryCards', results);
  } catch (error) {
    window.alert(error.message);
  }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */
export function fetchThenCatchCards() {
  const res = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => console.log('fetchThenCatchCards', result))
    .catch((error) => window.alert(error.message));
}

/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function fetchAsyncTryFinallyCards() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const result = await res.json();
    console.log('fetchAsyncTryFinallyCards', result);
  } catch (error) {
    window.alert(error);
  } finally {
    console.log('I think we are through here');
  }
}
/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function fetchThenCatchFinallyCards() {
  const res = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => console.log('fetchAsyncTryFinallyCards', result))
    .catch((error) => window.alert(error.message))
    .finally(() => console.log('alright im out'));
}
/**
 * TODO: Exercise 7: Call your function from exercise 5 using .then
 */
export function fetchFunction5ThenCards() {
  const res = fetchAsyncTryFinallyCards().then(console.log(res));
  // console.log(res);
}
/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */
