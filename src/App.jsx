import {
  asyncGetCards,
  fetchAsyncTryCards,
  fetchAsyncTryFinallyCards,
  fetchFunction5ThenCards,
  fetchFunction6AsyncCards,
  fetchThenCards,
  fetchThenCatchCards,
  fetchThenCatchFinallyCards,
} from './services/promise-me';

export default function App() {
  // asyncGetCards();
  // fetchThenCards();
  // fetchAsyncTryCards();
  // fetchThenCatchCards();
  // fetchAsyncTryFinallyCards();
  // fetchThenCatchFinallyCards();
  // fetchFunction5ThenCards();
  fetchFunction6AsyncCards();
  return (
    <>
      <h1>Hello World</h1>;
    </>
  );
}
